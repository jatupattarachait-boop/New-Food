import React, { useState, useEffect } from 'react';
import './index.css';

// ฐานข้อมูลเมนูอาหารพร้อมรูปภาพ
const database = {
  foods: {
    thai: [
      { name: "ผัดไทยกุ้งสด", image: "/Image/pad_thai.png" },
      { name: "ต้มยำกุ้ง", image: "/Image/tom_yum.png" },
      { name: "ส้มตำไทย", image: null },
      { name: "ข้าวกะเพราเนื้อ", image: null }
    ],
    japanese: [
      { name: "ราเมนทงคัตสึ", image: "/Image/ramen.png" },
      { name: "ซูชิพรีเมียม", image: null },
      { name: "ซาชิมิเซ็ต", image: null }
    ],
    western: [
      { name: "พิซซ่ามาร์เกริต้า", image: "/Image/pizza_margherita.png" },
      { name: "ทีรามิสุ", image: "/Image/tiramisu.png" },
      { name: "สเต็กเนื้อวากิว", image: null }
    ],
  },
  ingredients: [
    { name: "เนื้อวากิว", image: null }, 
    { name: "เห็ดทรัฟเฟิล", image: null }, 
    { name: "แซลมอน", image: null }
  ]
};

// เครื่องมือจัดการพาร์ทของรูปภาพโลคอลและคลาวด์สำหรับ GitHub Pages
const getRecipeImage = (imagePath) => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http') || imagePath.startsWith('data:')) return imagePath;
  const cleanPath = imagePath.replace(/^\//, '');
  return `${import.meta.env.BASE_URL || '/'}${cleanPath}`;
};

const LuxuryWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(null);

  const [mode, setMode] = useState('food'); 
  const [country, setCountry] = useState('thai'); 
  const [items, setItems] = useState(database.foods.thai); 
  const [customInput, setCustomInput] = useState('');

  useEffect(() => {
    if (mode === 'ingredient') {
      setItems(database.ingredients);
    } else {
      setItems(database.foods[country]);
    }
    setWinner(null);
  }, [mode, country]);

  const handleAddItem = (e) => {
    e.preventDefault();
    if (customInput.trim() !== '' && items.length < 12) {
      setItems([...items, { name: customInput.trim(), image: null }]);
      setCustomInput('');
    } else if (items.length >= 12) {
      alert("ไม่สามารถเพิ่มได้แล้ว (สูงสุด 12 รายการเพื่อความสวยงาม)");
    }
  };

  const handleRemoveItem = (indexToRemove) => {
    if (items.length <= 2) {
      alert("ต้องมีรายการอย่างน้อย 2 อย่างในวงล้อครับ");
      return;
    }
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  const sliceAngle = 360 / items.length;
  
  // สร้าง Background สีสลับกันแบบรังผึ้ง/วงล้อ
  const generateGradient = () => {
    const stops = items.map((_, i) => {
      const color = i % 2 === 0 ? 'var(--color-primary-green)' : 'var(--color-bg-cream)';
      return `${color} ${i * sliceAngle}deg ${(i + 1) * sliceAngle}deg`;
    }).join(', ');
    return `conic-gradient(${stops})`;
  };

  // คำนวณการหมุนที่แม่นยำ 100%
  const spinWheel = () => {
    if (isSpinning || items.length < 2) return;
    setIsSpinning(true);
    setWinner(null);

    // 1. สุ่มเลือกล็อกเป้าผู้ชนะ
    const winningIndex = Math.floor(Math.random() * items.length);
    const winnerItem = items[winningIndex];

    // 2. คำนวณองศาเป้าหมายให้อยู่ตรงกลางของช่องด้านบนสุด
    const targetAngle = 360 - (winningIndex * sliceAngle + sliceAngle / 2);
    const extraSpins = 5 * 360; // หมุนหลอก 5 รอบ
    const nextRotation = rotation + (extraSpins - (rotation % 360)) + targetAngle;

    setRotation(nextRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setWinner(winnerItem);
    }, 5000); 
  };

  return (
    <div className="wheel-main-container">
      
      {/* แผงควบคุม */}
      <div className="wheel-control-panel">
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <select value={mode} onChange={(e) => setMode(e.target.value)} className="wheel-select">
            <option value="food">🍽️ สุ่มเมนูอาหาร</option>
            <option value="ingredient">🥦 สุ่มวัตถุดิบ</option>
          </select>

          {mode === 'food' && (
            <select value={country} onChange={(e) => setCountry(e.target.value)} className="wheel-select">
              <option value="thai">🇹🇭 อาหารไทย</option>
              <option value="japanese">🇯🇵 อาหารญี่ปุ่น</option>
              <option value="western">🇺🇸 อาหารตะวันตก</option>
            </select>
          )}
        </div>

        <form onSubmit={handleAddItem} style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            placeholder="พิมพ์เพิ่มเมนูเอง..." 
            value={customInput} 
            onChange={(e) => setCustomInput(e.target.value)} 
            className="wheel-input" 
          />
          <button type="submit" className="wheel-add-btn">+ เพิ่ม</button>
        </form>

        <div className="wheel-tags-container">
          {items.map((item, index) => (
            <span key={index} className="wheel-tag">
              {item.name} 
              <span className="wheel-tag-remove" onClick={() => handleRemoveItem(index)}>✕</span>
            </span>
          ))}
        </div>
      </div>

      {/* ประกาศผลรางวัล */}
      {winner && (
        <div className="wheel-winner-card">
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-primary-green)' }}>เมนูที่คุณสุ่มได้คือ</p>
          {winner.image && (
             <img src={getRecipeImage(winner.image)} alt={winner.name} className="wheel-winner-img" />
          )}
          <h2 style={{ color: 'var(--color-accent-gold)', margin: '5px 0 0 0' }}>{winner.name}</h2>
        </div>
      )}

      {/* ตัววงล้อ */}
      <div className="wheel-wrapper">
        <div className="wheel-pointer"></div>
        <div 
          className="luxury-wheel" 
          style={{ background: generateGradient(), transform: `rotate(${rotation}deg)` }}
        >
          {items.map((item, index) => {
            const angle = (index * sliceAngle) + (sliceAngle / 2);
            return (
              <div 
                key={index} 
                className="wheel-slice-content"
                style={{ 
                  transform: `rotate(${angle}deg) translate(0, -50%)`,
                  color: index % 2 === 0 ? 'var(--color-accent-gold)' : 'var(--color-primary-green)'
                }}
              >
                {item.image && (
                  <img src={getRecipeImage(item.image)} alt={item.name} className="wheel-slice-img" />
                )}
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
        <button className="wheel-spin-btn" onClick={spinWheel} disabled={isSpinning}>
          {isSpinning ? '...' : 'SPIN'}
        </button>
      </div>

    </div>
  );
};

export default LuxuryWheel;
