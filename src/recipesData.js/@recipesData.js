// ฐานข้อมูลสูตรอาหารหลักแบบ High-Fidelity
export const highFidelityRecipes = [
  {
    id: "h1",
    name: "ผัดไทยกุ้งสด (Pad Thai Goong Sod)",
    type: "savory",
    cuisine: "Thai",
    diet: ["Halal"],
    caloriesPerServing: 350,
    macros: { protein: 18, carbs: 45, fat: 12 },
    prepTime: 15,
    cookTime: 10,
    description: "ผัดไทยเส้นเหนียวนุ่ม ผัดกับซอสสูตรพิเศษและกุ้งสดตัวโต เป็นอาหารประจำชาติไทยที่เป็นที่นิยมทั่วโลก",
    image: "Image/pad_thai.png",
    ingredients: [
      { id: "i-rice-noodle", name: "เส้นเล็กแห้ง", amount: 100, unit: "g", caloriesPerGram: 3.5, protein: 0.05, carbs: 0.8, fat: 0.01 },
      { id: "i-shrimp", name: "กุ้งสดปอกเปลือก", amount: 120, unit: "g", caloriesPerGram: 1.2, protein: 0.24, carbs: 0.01, fat: 0.02 },
      { id: "i-padthai-sauce", name: "ซอสมะขามเปียกปรุงรส", amount: 50, unit: "g", caloriesPerGram: 1.8, protein: 0.02, carbs: 0.4, fat: 0.02 },
      { id: "i-tofu", name: "เต้าหู้เหลืองหั่นเต๋า", amount: 50, unit: "g", caloriesPerGram: 1.4, protein: 0.12, carbs: 0.03, fat: 0.08 },
      { id: "i-egg", name: "ไข่ไก่", amount: 50, unit: "g", caloriesPerGram: 1.5, protein: 0.13, carbs: 0.01, fat: 0.1 },
      { id: "i-shallot", name: "หอมแดงสับ", amount: 15, unit: "g", caloriesPerGram: 0.4, protein: 0.01, carbs: 0.09, fat: 0.0 },
      { id: "i-chive", name: "ใบกุยช่ายหั่นท่อน", amount: 20, unit: "g", caloriesPerGram: 0.3, protein: 0.02, carbs: 0.04, fat: 0.0 },
      { id: "i-beansprout", name: "ถั่วงอก", amount: 50, unit: "g", caloriesPerGram: 0.3, protein: 0.03, carbs: 0.06, fat: 0.0 }
    ],
    steps: [
      { step: 1, text: "แช่เส้นเล็กแห้งในน้ำอุณหภูมิปกติประมาณ 30 นาทีจนเส้นนุ่ม ตักขึ้นพักไว้", duration: 0 },
      { step: 2, text: "ตั้งกระทะไฟกลาง ใส่น้ำมันเจียวหอมแดงและเต้าหู้เหลืองจนเหลืองหอม", duration: 120 },
      { step: 3, text: "ใส่กุ้งสดลงไปผัดพอสุก (กุ้งเปลี่ยนเป็นสีชมพู) ตักกุ้งขึ้นพักไว้เพื่อไม่ให้กุ้งสุกเกินไป", duration: 90 },
      { step: 4, text: "ใส่เส้นเล็กที่แช่น้ำแล้วลงไป ตามด้วยซอสผัดไทย ผัดคลุกเคล้าให้เข้ากันจนเส้นเหนียวนุ่มและดูดซึมซอส", duration: 180 },
      { step: 5, text: "เกลี่ยเส้นไว้ข้างกระทะ ตอกไข่ไก่ลงไป ยีไข่พอแตก เมื่อไข่เริ่มสุกตลบเส้นลงมากลบ", duration: 60 },
      { step: 6, text: "ใส่กุ้งที่พักไว้ ถั่วงอก และใบกุยช่าย ผัดเร็วๆ ให้เข้ากัน ตักเสิร์ฟพร้อมมะนาวฝาน พริกป่น และถั่วลิสงป่น", duration: 45 }
    ],
    alternativeIngredients: {
      "i-shrimp": ["อกไก่หั่นชิ้น", "หมูสไลด์", "เต้าหู้แข็งเพิ่มเติม (สำหรับมังสวิรัติ)"],
      "i-rice-noodle": ["เส้นบุก (คีโต)", "วุ้นเส้น", "เส้นหมี่ข้าวกล้อง"]
    }
  },
  {
    id: "h2",
    name: "ต้มยำกุ้งน้ำข้น (Tom Yum Goong)",
    type: "savory",
    cuisine: "Thai",
    diet: ["Halal"],
    caloriesPerServing: 280,
    macros: { protein: 20, carbs: 12, fat: 18 },
    prepTime: 10,
    cookTime: 15,
    description: "แกงไทยรสจัดจ้าน เปรี้ยว เค็ม เผ็ด กลมกล่อม หอมสมุนไพร ข่า ตะไคร้ ใบมะกรูด และน้ำพริกเผา",
    image: "Image/tom_yum.png",
    ingredients: [
      { id: "i-shrimp", name: "กุ้งสดลายเสือ", amount: 150, unit: "g", caloriesPerGram: 1.2, protein: 0.24, carbs: 0.01, fat: 0.02 },
      { id: "i-mushroom-straw", name: "เห็ดฟาง", amount: 80, unit: "g", caloriesPerGram: 0.3, protein: 0.03, carbs: 0.05, fat: 0.0 },
      { id: "i-lemongrass", name: "ตะไคร้หั่นท่อนทุบ", amount: 30, unit: "g", caloriesPerGram: 0.2, protein: 0.01, carbs: 0.05, fat: 0.0 },
      { id: "i-galangal", name: "ข่าหั่นแว่น", amount: 20, unit: "g", caloriesPerGram: 0.2, protein: 0.01, carbs: 0.05, fat: 0.0 },
      { id: "i-limeleaf", name: "ใบมะกรูดฉีก", amount: 5, unit: "g", caloriesPerGram: 0.2, protein: 0.01, carbs: 0.05, fat: 0.0 },
      { id: "i-chili-paste", name: "น้ำพริกเผา", amount: 25, unit: "g", caloriesPerGram: 4.5, protein: 0.04, carbs: 0.35, fat: 0.3 },
      { id: "i-evaporated-milk", name: "นมข้นจืด", amount: 60, unit: "ml", caloriesPerGram: 1.4, protein: 0.07, carbs: 0.1, fat: 0.08 },
      { id: "i-lime-juice", name: "น้ำมะนาวสด", amount: 30, unit: "ml", caloriesPerGram: 0.3, protein: 0.0, carbs: 0.09, fat: 0.0 },
      { id: "i-fish-sauce", name: "น้ำปลาดี", amount: 20, unit: "ml", caloriesPerGram: 0.6, protein: 0.05, carbs: 0.02, fat: 0.0 }
    ],
    steps: [
      { step: 1, text: "ต้มน้ำซุป/น้ำเปล่าประมาณ 500 มล. ใส่ข่า ตะไคร้ และใบมะกรูด ต้มจนน้ำเดือดและส่งกลิ่นหอม", duration: 180 },
      { step: 2, text: "ใส่เห็ดฟาง ต้มต่อจนเห็ดสุกเล็กน้อยประมาณ 2 นาที", duration: 120 },
      { step: 3, text: "ปรุงน้ำพริกเผาและน้ำปลาลงในหม้อ คนให้ละลายเข้ากัน", duration: 60 },
      { step: 4, text: "ใส่กุ้งสดลงในน้ำเดือด ห้ามคนเพื่อไม่ให้คาว ต้มจนกุ้งสุกพอดี (ประมาณ 2-3 นาที)", duration: 150 },
      { step: 5, text: "ใส่นมข้นจืด คนให้เข้ากันแล้วปิดไฟทันที เพื่อป้องกันนมจับตัวเป็นก้อน", duration: 30 },
      { step: 6, text: "ยกลงจากเตา บีบน้ำมะนาวและโรยผักชีตามชอบ ตักใส่ชามเสิร์ฟร้อนๆ", duration: 30 }
    ],
    alternativeIngredients: {
      "i-shrimp": ["เนื้อไก่หั่นเต๋า", "เนื้อปลากะพง", "เห็ดนางฟ้าเพิ่มเติม (สำหรับมังสวิรัติ)"],
      "i-evaporated-milk": ["กะทิสด", "นมถั่วเหลืองชนิดจืด"]
    }
  },
  {
    id: "h3",
    name: "ข้าวเหนียวมะม่วง (Mango Sticky Rice)",
    type: "sweet",
    cuisine: "Thai",
    diet: ["Vegan", "Vegetarian", "Gluten-Free"],
    caloriesPerServing: 420,
    macros: { protein: 4, carbs: 80, fat: 10 },
    prepTime: 20,
    cookTime: 30,
    description: "ข้าวเหนียวมูนกะทิหอมหวานมัน กินคู่กับมะม่วงน้ำดอกไม้สุกรสหวานอมเปรี้ยว ราดกะทิสดและถั่วทองทอดกรุบกรอบ",
    image: "Image/mango_sticky_rice.png",
    ingredients: [
      { id: "i-glutinous-rice", name: "ข้าวเหนียวเขี้ยวงู", amount: 150, unit: "g", caloriesPerGram: 3.6, protein: 0.07, carbs: 0.8, fat: 0.01 },
      { id: "i-mango", name: "มะม่วงน้ำดอกไม้สุก", amount: 200, unit: "g", caloriesPerGram: 0.6, protein: 0.01, carbs: 0.15, fat: 0.0 },
      { id: "i-coconut-milk", name: "หัวกะทิเข้มข้น", amount: 100, unit: "ml", caloriesPerGram: 2.3, protein: 0.02, carbs: 0.06, fat: 0.24 },
      { id: "i-sugar", name: "น้ำตาลทรายขาว", amount: 60, unit: "g", caloriesPerGram: 4.0, protein: 0.0, carbs: 1.0, fat: 0.0 },
      { id: "i-salt", name: "เกลือป่น", amount: 3, unit: "g", caloriesPerGram: 0.0, protein: 0.0, carbs: 0.0, fat: 0.0 },
      { id: "i-split-mungbean", name: "ถั่วทอง (ถั่วเขียวซีกเราะเปลือก)", amount: 10, unit: "g", caloriesPerGram: 3.4, protein: 0.22, carbs: 0.6, fat: 0.01 }
    ],
    steps: [
      { step: 1, text: "ซาวข้าวเหนียวให้สะอาด แช่น้ำทิ้งไว้ 3 ชั่วโมงขึ้นไป แล้วนำมานึ่งในชั้นหวดจนสุกดี (ประมาณ 25-30 นาที)", duration: 1800 },
      { step: 2, text: "ทำน้ำกะทิสำหรับมูน: ผสมหัวกะทิ น้ำตาลทราย และเกลือในหม้อใบเล็ก ตั้งไฟอ่อนพอร้อนและน้ำตาลละลายดี (ระวังห้ามกะทิเดือดจนแตกมัน)", duration: 300 },
      { step: 3, text: "เทข้าวเหนียวสุกร้อนๆ ลงในชามผสม เทกะทิสำหรับมูนใส่ลงไป คนเร็วๆ ให้เข้ากัน ปิดฝาอบทิ้งไว้ 20 นาทีให้ข้าวเหนียวดูดกะทิ", duration: 1200 },
      { step: 4, text: "ทำกะทิราดหน้า: นำกะทิที่เหลือ ผสมเกลือนิดหน่อยและแป้งข้าวเจ้าเล็กน้อย ตั้งไฟอ่อนจนข้น ตักขึ้นพักไว้", duration: 180 },
      { step: 5, text: "ปอกมะม่วงน้ำดอกไม้สุก หั่นครึ่งตามแนวยาวแล้วสไลด์เป็นชิ้นสวยงาม", duration: 120 },
      { step: 6, text: "จัดข้าวเหนียวมูนวางเคียงมะม่วงสุก ราดหน้ากะทิข้น และโรยถั่วทองทอดกรอบ พร้อมรับประทาน", duration: 60 }
    ],
    alternativeIngredients: {
      "i-sugar": ["น้ำตาลมะพร้าว", "สารให้ความหวานทดแทนน้ำตาล (Stevia / Erythritol)"],
      "i-glutinous-rice": ["ข้าวเหนียวดำ", "ข้าวเหนียวกล้องมูน"]
    }
  },
  {
    id: "h4",
    name: "สปาเก็ตตี้คาร์โบนาร่า (Spaghetti Carbonara)",
    type: "savory",
    cuisine: "Italian",
    diet: [],
    caloriesPerServing: 480,
    macros: { protein: 22, carbs: 55, fat: 20 },
    prepTime: 10,
    cookTime: 12,
    description: "พาสต้าอิตาเลียนแท้ๆ ซอสครีมข้นหอมมันจากไข่แดง ชีสพาร์เมซาน และเบคอนกรอบไร้นมสดหรือครีมเทียม",
    image: "Image/carbonara.png",
    ingredients: [
      { id: "i-spaghetti", name: "เส้นสปาเก็ตตี้", amount: 90, unit: "g", caloriesPerGram: 3.5, protein: 0.12, carbs: 0.75, fat: 0.015 },
      { id: "i-pancetta", name: "เบคอนหรือปันเชตต้าหั่นเต๋า", amount: 60, unit: "g", caloriesPerGram: 4.8, protein: 0.15, carbs: 0.01, fat: 0.45 },
      { id: "i-egg-yolk", name: "ไข่แดง", amount: 40, unit: "g", caloriesPerGram: 3.2, protein: 0.16, carbs: 0.01, fat: 0.28 },
      { id: "i-pecorino", name: "ชีสพาร์เมซานขูดฝอย", amount: 30, unit: "g", caloriesPerGram: 4.0, protein: 0.38, carbs: 0.03, fat: 0.28 },
      { id: "i-blackpepper", name: "พริกไทยดำบดหยาบ", amount: 3, unit: "g", caloriesPerGram: 2.5, protein: 0.1, carbs: 0.6, fat: 0.03 }
    ],
    steps: [
      { step: 1, text: "ตั้งหม้อต้มน้ำให้เดือด ใส่เกลือป่นเล็กน้อย ต้มเส้นสปาเก็ตตี้ประมาณ 8-9 นาทีจนได้ความสุกแบบ Al Dente (หนึบสู้ฟันนิดๆ)", duration: 540 },
      { step: 2, text: "ระหว่างต้มเส้น นำเบคอนลงทอดในกระทะเหล็กด้วยไฟอ่อนจนน้ำมันละลายและเบคอนกรอบสีเหลืองทอง ปิดไฟพักไว้", duration: 300 },
      { step: 3, text: "ตีไข่แดงและชีสพาร์เมซานขูดฝอยในถ้วยให้เข้ากันจนเป็นเนื้อครีมข้นเหนียว โรยพริกไทยดำบดลงไปผสม", duration: 120 },
      { step: 4, text: "เมื่อต้มเส้นพาสต้าเสร็จแล้ว ตักขึ้นใส่ในกระทะเบคอนโดยตรง คลุกเคล้าเส้นกับน้ำมันเบคอนร้อนๆ", duration: 60 },
      { step: 5, text: "ตักน้ำต้มเส้นประมาณ 1 ทัพพีใส่ลงไป คนให้เคลือบเส้น จากนั้นพักกระทะให้คลายความร้อนลงเล็กน้อย (เพื่อไม่ให้ไข่จับตัวเป็นก้อนเมื่อเทลงไป)", duration: 60 },
      { step: 6, text: "เทส่วนผสมไข่แดงและชีสลงไป รีบคลุกเคล้าเส้นอย่างรวดเร็วและต่อเนื่องจนชีสละลายรวมเป็นครีมข้นเคลือบเส้นสวยงาม ตักใส่จานโรยชีสและเบคอนกรอบเพิ่ม", duration: 90 }
    ],
    alternativeIngredients: {
      "i-pancetta": ["อกไก่รมควัน", "เห็ดแชมปิญองสไลด์ (มังสวิรัติ)"],
      "i-pecorino": ["ชีสพาร์มีจาโน เรจจีอาโน", "มอสซาเรลล่าชีสไขมันต่ำ"]
    }
  },
  {
    id: "h5",
    name: "พิซซ่ามาเกริต้า (Margherita Pizza)",
    type: "savory",
    cuisine: "Italian",
    diet: ["Vegetarian"],
    caloriesPerServing: 320,
    macros: { protein: 14, carbs: 42, fat: 10 },
    prepTime: 15,
    cookTime: 8,
    description: "พิซซ่าคลาสสิกสไตล์เนเปิลส์ แป้งบางกรอบนอกนุ่มใน หน้าซอสมะเขือเทศเข้มข้น มอสซาเรลล่าชีสสด และใบโหระพาอิตาเลียน",
    image: "Image/pizza_margherita.png",
    ingredients: [
      { id: "i-pizza-dough", name: "แป้งโดพิซซ่า", amount: 150, unit: "g", caloriesPerGram: 2.8, protein: 0.08, carbs: 0.58, fat: 0.015 },
      { id: "i-tomato-sauce", name: "ซอสมะเขือเทศเข้มข้น", amount: 60, unit: "g", caloriesPerGram: 0.8, protein: 0.02, carbs: 0.16, fat: 0.01 },
      { id: "i-fresh-mozzarella", name: "มอสซาเรลล่าชีสสด", amount: 80, unit: "g", caloriesPerGram: 2.5, protein: 0.18, carbs: 0.02, fat: 0.19 },
      { id: "i-basil-leaf", name: "ใบโหระพาอิตาเลียน", amount: 5, unit: "g", caloriesPerGram: 0.2, protein: 0.03, carbs: 0.03, fat: 0.0 },
      { id: "i-olive-oil", name: "น้ำมันมะกอกบริสุทธิ์", amount: 10, unit: "ml", caloriesPerGram: 8.8, protein: 0.0, carbs: 0.0, fat: 1.0 }
    ],
    steps: [
      { step: 1, text: "วอร์มเตาอบที่อุณหภูมิสูงสุด (250-300 °C) นำถาดอบพิซซ่าไปวอร์มรอไว้ด้วย", duration: 600 },
      { step: 2, text: "แผ่และยืดแป้งพิซซ่าโดออกเป็นแผ่นกลมแบนหนาประมาณ 0.5 ซม. โดยเหลือขอบไว้ให้ฟูหนาหนึบ", duration: 180 },
      { step: 3, text: "ทาซอสมะเขือเทศเกลี่ยให้ทั่วแผ่นแป้ง เว้นระยะห่างจากขอบประมาณ 1.5 ซม.", duration: 60 },
      { step: 4, text: "ฉีกมอสซาเรลล่าชีสสดเป็นชิ้นๆ วางกระจายทั่วหน้าพิซซ่า วางใบโหระพาอิตาเลียนทับลงไป", duration: 90 },
      { step: 5, text: "พรมน้ำมันมะกอกบริสุทธิ์เล็กน้อย นำเข้าอบประมาณ 6-8 นาทีจนขอบแป้งฟูเกรียมและชีสเดือดเป็นสีเหลืองทอง", duration: 420 },
      { step: 6, text: "นำออกจากเตา ตกแต่งด้วยใบโหระพาอิตาเลียนสดเพิ่มเติม ตัดเป็นชิ้นพร้อมรับประทานทันที", duration: 60 }
    ],
    alternativeIngredients: {
      "i-fresh-mozzarella": ["ชีสสดไขมันต่ำ", "ชีสเจวีแกน (ทำจากเม็ดมะม่วงหิมพานต์)"],
      "i-pizza-dough": ["แป้งพิซซ่าโฮลวีท", "แผ่นแป้งตอร์ติญ่า (สไตล์บางกรอบเร่งด่วน)"]
    }
  },
  {
    id: "h6",
    name: "ทีรามิสุ (Tiramisu)",
    type: "sweet",
    cuisine: "Italian",
    diet: ["Vegetarian"],
    caloriesPerServing: 380,
    macros: { protein: 6, carbs: 40, fat: 22 },
    prepTime: 25,
    cookTime: 0,
    description: "ขนมหวานยอดฮิตสไตล์อิตาเลียน เลดี้ฟิงเกอร์ชุบกาแฟเอสเพรสโซรสเข้มข้น สลับชั้นกับครีมมาสคาโปนชีสเนื้อเนียนนุ่ม โรยผงโกโก้หอมกรุ่น",
    image: "Image/tiramisu.png",
    ingredients: [
      { id: "i-mascarpone", name: "มาสคาโปนชีส", amount: 120, unit: "g", caloriesPerGram: 4.2, protein: 0.05, carbs: 0.04, fat: 0.44 },
      { id: "i-ladyfinger", name: "คุกกี้เลดี้ฟิงเกอร์", amount: 80, unit: "g", caloriesPerGram: 3.8, protein: 0.08, carbs: 0.76, fat: 0.05 },
      { id: "i-espresso", name: "กาแฟเอสเพรสโซรสเข้มข้น", amount: 100, unit: "ml", caloriesPerGram: 0.02, protein: 0.0, carbs: 0.005, fat: 0.0 },
      { id: "i-heavycream", name: "วิปปิ้งครีมชนิดจืด", amount: 80, unit: "ml", caloriesPerGram: 3.4, protein: 0.02, carbs: 0.03, fat: 0.36 },
      { id: "i-cocoapowder", name: "ผงโกโก้แท้ 100%", amount: 15, unit: "g", caloriesPerGram: 2.3, protein: 0.2, carbs: 0.58, fat: 0.14 },
      { id: "i-sugar-powder", name: "น้ำตาลทรายป่น", amount: 40, unit: "g", caloriesPerGram: 4.0, protein: 0.0, carbs: 1.0, fat: 0.0 }
    ],
    steps: [
      { step: 1, text: "ชงเอสเพรสโซเข้มข้น เทใส่จานกว้าง ทิ้งไว้ให้เย็นสนิท", duration: 300 },
      { step: 2, text: "ตีวิปปิ้งครีมกับน้ำตาลทรายป่นจนตั้งยอดอ่อน ตักพักไว้", duration: 180 },
      { step: 3, text: "ในชามอีกใบ ตีมาสคาโปนชีสให้อ่อนตัวลง แล้วนำวิปครีมมาสับตะล่อมเข้าด้วยกันจนเป็นเนื้อครีมเนียนเบา", duration: 240 },
      { step: 4, text: "จุ่มคุกกี้เลดี้ฟิงเกอร์ลงในกาแฟเอสเพรสโซอย่างรวดเร็ว (ฝั่งละ 1 วินาที เพื่อไม่ให้เปียกยุ่ย) นำมาวางเรียงที่ก้นแม่พิมพ์เรียงต่อกันเป็นชั้น", duration: 180 },
      { step: 5, text: "ตักครีมมาสคาโปนปาดทับคุกกี้สลับชั้นกัน ทำซ้ำอีกชั้นจนเต็มพิมพ์ ปาดหน้าให้เนียนเรียบ", duration: 240 },
      { step: 6, text: "นำเข้าแช่ตู้เย็นอย่างน้อย 4-6 ชั่วโมงเพื่อให้ขนมเซ็ตตัวดี ก่อนเสิร์ฟโรยผงโกโก้ให้ทั่วหน้าขนม", duration: 14400 }
    ],
    alternativeIngredients: {
      "i-mascarpone": ["ครีมชีสไขมันต่ำผสมกรีกโยเกิร์ต"],
      "i-ladyfinger": ["เค้กสปันจ์สไลด์", "แครกเกอร์โฮลวีท"]
    }
  },
  {
    id: "h7",
    name: "ราเมนหมูชาชูน้ำทงคตสึ (Tonkotsu Ramen)",
    type: "savory",
    cuisine: "Japanese",
    diet: [],
    caloriesPerServing: 620,
    macros: { protein: 28, carbs: 62, fat: 26 },
    prepTime: 20,
    cookTime: 120,
    description: "บะหมี่ราเมนญี่ปุ่นเส้นเหนียวนุ่ม ในน้ำซุปกระดูกหมูที่เคี่ยวนานหลายชั่วโมงจนขาวข้น หวานละมุน ท็อปปิ้งด้วยหมูชาชูเปื่อยๆ ไข่ต้มซีอิ๊วมะตูม และสาหร่าย",
    image: "Image/ramen.png",
    ingredients: [
      { id: "i-ramen-noodle", name: "เส้นราเมนสด", amount: 120, unit: "g", caloriesPerGram: 2.8, protein: 0.08, carbs: 0.58, fat: 0.01 },
      { id: "i-tonkotsu-soup", name: "น้ำซุปทงคตสึเข้มข้น", amount: 300, unit: "ml", caloriesPerGram: 0.8, protein: 0.04, carbs: 0.03, fat: 0.06 },
      { id: "i-chashu-pork", name: "หมูสามชั้นชาชูสไลด์", amount: 80, unit: "g", caloriesPerGram: 3.6, protein: 0.16, carbs: 0.02, fat: 0.32 },
      { id: "i-ramen-egg", name: "ไข่ต้มอาจิทะมะ (หมักซีอิ๊ว)", amount: 50, unit: "g", caloriesPerGram: 1.6, protein: 0.13, carbs: 0.02, fat: 0.11 },
      { id: "i-nori-seaweed", name: "สาหร่ายโนริแผ่น", amount: 2, unit: "g", caloriesPerGram: 0.5, protein: 0.04, carbs: 0.04, fat: 0.0 },
      { id: "i-scallion", name: "ต้นหอมญี่ปุ่นซอย", amount: 15, unit: "g", caloriesPerGram: 0.3, protein: 0.01, carbs: 0.06, fat: 0.0 }
    ],
    steps: [
      { step: 1, text: "เคี่ยวน้ำซุปกระดูกหมูทงคตสึกับขิง กระเทียม และต้นหอมญี่ปุ่นด้วยไฟแรงจนน้ำขุ่นเป็นสีน้ำนม (ขั้นตอนนี้ในชีวิตจริงจะใช้เวลา 8-12 ชม.)", duration: 7200 },
      { step: 2, text: "เตรียมท็อปปิ้ง: อุ่นหมูชาชูให้ร้อน และหั่นไข่ต้มอาจิทะมะครึ่งซีกรอไว้", duration: 120 },
      { step: 3, text: "ต้มน้ำเปล่าให้เดือดพล่าน นำเส้นราเมนสดลงลวกประมาณ 2-3 นาทีตามระดับความนุ่มที่ชอบ ตักขึ้นสะบัดน้ำให้แห้งสนิท", duration: 150 },
      { step: 4, text: "เตรียมชามราเมน ใส่ซอสโชยุปรุงรส (ทาเระ) 1-2 ช้อนโต๊ะไว้ที่ก้นชาม", duration: 30 },
      { step: 5, text: "เทน้ำซุปทงคตสึร้อนๆ ลงไปคนผสมกับทาเระให้เข้ากันดี ใส่เส้นราเมนจัดทรงให้เรียบร้อย", duration: 45 },
      { step: 6, text: "จัดวางหมูชาชู ไข่ต้ม หน่อไม้ดอง โรยต้นหอมซอยหนาๆ และเสียบแผ่นสาหร่ายโนริข้างชาม เสิร์ฟทันที", duration: 60 }
    ],
    alternativeIngredients: {
      "i-chashu-pork": ["เนื้ออกไก่สไลด์", "เต้าหู้ย่างพะโล้ (มังสวิรัติ)"],
      "i-tonkotsu-soup": ["ซุปมิโซะเจ", "ซุปโชยุผักรวมเข้มข้น"]
    }
  },
  {
    id: "h8",
    name: "ไดฟูกุสตรอว์เบอร์รี (Strawberry Daifuku)",
    type: "sweet",
    cuisine: "Japanese",
    diet: ["Vegan", "Vegetarian", "Gluten-Free"],
    caloriesPerServing: 180,
    macros: { protein: 3, carbs: 40, fat: 1 },
    prepTime: 20,
    cookTime: 10,
    description: "ขนมหวานญี่ปุ่นยอดฮิต แป้งโมจิเหนียวนุ่มยืดห่อไส้ถั่วแดงกวนหวานมันและสตรอว์เบอร์รีสดรสเปรี้ยวอมหวานชิ้นโต",
    image: "Image/daifuku.png",
    ingredients: [
      { id: "i-glutinous-flour", name: "แป้งข้าวเหนียวญี่ปุ่น (Shiratamako)", amount: 80, unit: "g", caloriesPerGram: 3.5, protein: 0.07, carbs: 0.8, fat: 0.01 },
      { id: "i-redbean-paste", name: "ถั่วแดงกวนละเอียด", amount: 150, unit: "g", caloriesPerGram: 2.6, protein: 0.06, carbs: 0.55, fat: 0.01 },
      { id: "i-fresh-strawberry", name: "สตรอว์เบอร์รีสดขนาดใหญ่", amount: 6, unit: "pcs", caloriesPerGram: 0.32, protein: 0.01, carbs: 0.08, fat: 0.0 },
      { id: "i-starch", name: "แป้งมันฝรั่งหรือแป้งข้าวโพด (สำหรับคั่วทำแป้งนวล)", amount: 30, unit: "g", caloriesPerGram: 3.4, protein: 0.0, carbs: 0.85, fat: 0.0 },
      { id: "i-water", name: "น้ำสะอาด", amount: 90, unit: "ml", caloriesPerGram: 0.0, protein: 0.0, carbs: 0.0, fat: 0.0 },
      { id: "i-sugar-daifuku", name: "น้ำตาลทราย", amount: 20, unit: "g", caloriesPerGram: 4.0, protein: 0.0, carbs: 1.0, fat: 0.0 }
    ],
    steps: [
      { step: 1, text: "ล้างสตรอว์เบอร์รีสด เด็ดขั้ว ซับให้แห้งสนิท จากนั้นปั้นถั่วแดงกวนเป็นแผ่นกลมหุ้มผลสตรอว์เบอร์รีไว้โดยเหลือส่วนยอดไว้เล็กน้อย", duration: 300 },
      { step: 2, text: "คั่วแป้งมันฝรั่งในกระทะไฟอ่อนประมาณ 2-3 นาทีจนสุก สำหรับใช้ทำแป้งนวลกันโมจิติดมือ ตักพักไว้", duration: 180 },
      { step: 3, text: "ผสมแป้งข้าวเหนียว น้ำตาลทราย และน้ำสะอาดในชามทนไฟ คนจนแป้งละลายเข้ากันไม่เป็นก้อน", duration: 120 },
      { step: 4, text: "คลุมพลาสติกแรป นำเข้าไมโครเวฟไฟกลาง (600W) รอบละ 1 นาที นำออกมาคนแล้วเวฟซ้ำ 2-3 รอบจนแป้งสุกเหนียวมีลักษณะใสและเหนียวยืด", duration: 180 },
      { step: 5, text: "โรยแป้งคั่วหนาๆ บนโต๊ะไม้ เทแป้งโมจิร้อนๆ ลงไป แบ่งเป็น 6 ส่วนเท่าๆ กัน แผ่ออกเป็นแผ่นกลมแบน", duration: 180 },
      { step: 6, text: "นำไส้ถั่วแดงหุ้มสตรอว์เบอร์รีมาวางตรงกลาง ค่อยๆ ดึงแป้งโมจิห่อหุ้มให้มิด ปัดเศษแป้งนวลส่วนเกินออก จัดทรงให้กลมมนสวยงาม", duration: 240 }
    ],
    alternativeIngredients: {
      "i-redbean-paste": ["เผือกกวนหวานน้อย", "ถั่วลันเตากวนเขียว (Zunda paste)", "ชาเขียวมัทฉะกวน"],
      "i-glutinous-flour": ["แป้งมันสำปะหลังผสมแป้งข้าวจ้าว (ความเหนียวจะต่างกันเล็กน้อย)"]
    }
  },
  {
    id: "h9",
    name: "แกงบัตเตอร์ชิกเก้น (Butter Chicken / Murgh Makhani)",
    type: "savory",
    cuisine: "Indian",
    diet: ["Halal"],
    caloriesPerServing: 450,
    macros: { protein: 32, carbs: 14, fat: 28 },
    prepTime: 20,
    cookTime: 25,
    description: "แกงไก่อินเดียรสละมุน หมักเนื้ออกไก่ด้วยโยเกิร์ตและเครื่องเทศแล้วนำไปย่าง เคี่ยวในซอสมะเขือเทศเนยครีมข้นหอมกรุ่นปานกลาง",
    image: "Image/butter_chicken.png",
    ingredients: [
      { id: "i-chicken-thigh", name: "เนื้อน่องหรืออกไก่หั่นเต๋า", amount: 150, unit: "g", caloriesPerGram: 1.5, protein: 0.22, carbs: 0.0, fat: 0.07 },
      { id: "i-tomato-puree", name: "มะเขือเทศบดละเอียด", amount: 120, unit: "g", caloriesPerGram: 0.4, protein: 0.01, carbs: 0.08, fat: 0.0 },
      { id: "i-heavycream-2", name: "วิปครีมสด", amount: 50, unit: "ml", caloriesPerGram: 3.4, protein: 0.02, carbs: 0.03, fat: 0.36 },
      { id: "i-butter", name: "เนยเค็มแท้", amount: 30, unit: "g", caloriesPerGram: 7.2, protein: 0.01, carbs: 0.0, fat: 0.8 },
      { id: "i-yogurt", name: "โยเกิร์ตรสธรรมชาติ", amount: 40, unit: "g", caloriesPerGram: 0.6, protein: 0.04, carbs: 0.04, fat: 0.03 },
      { id: "i-garam-masala", name: "ผงเครื่องเทศการัมมาซาล่า", amount: 10, unit: "g", caloriesPerGram: 3.2, protein: 0.1, carbs: 0.5, fat: 0.1 }
    ],
    steps: [
      { step: 1, text: "หมักเนื้อไก่ด้วยโยเกิร์ต ผงขมิ้น พริกป่นอินเดีย กระเทียมบด และผงการัมมาซาล่า ทิ้งไว้ในตู้เย็นอย่างน้อย 1 ชั่วโมง", duration: 3600 },
      { step: 2, text: "ตั้งกระทะไฟแรง ใส่เนยครึ่งหนึ่ง นำไก่หมักลงย่างจนสุกเกรียมสีทองสวย ตักขึ้นพักไว้", duration: 360 },
      { step: 3, text: "ในกระทะใบเดิม ใส่เนยที่เหลือ เจียวหอมใหญ่ กระเทียมสับ และขิงสับจนนิ่มและเหลืองทอง", duration: 180 },
      { step: 4, text: "ใส่มะเขือเทศบดละเอียด เครื่องเทศ และน้ำสะอาดเล็กน้อย เคี่ยวจนซอสข้นและเริ่มแยกน้ำมันเดือดแดงอบอุ่น", duration: 300 },
      { step: 5, text: "เทเนื้อไก่ที่ย่างแล้วลงไปผัดผสม เคี่ยวต่อด้วยไฟอ่อน 5 นาทีเพื่อให้ซอสซึมเข้าเนื้อไก่ดี", duration: 300 },
      { step: 6, text: "ลดไฟลงสุด เทวิปครีมสดลงไป คนคลุกเคล้าให้เนียนเป็นเนื้อซอสส้มอมทอง โรยผักชีสดเสิร์ฟคู่กับแผ่นแป้งนานหรือข้าวบาสมาติ", duration: 60 }
    ],
    alternativeIngredients: {
      "i-chicken-thigh": ["เต้าหู้แข็งหั่นเต๋า", "ชีสอินเดีย Paneer"],
      "i-heavycream-2": ["นมมะพร้าวเข้มข้น (กะทิ)", "ครีมเม็ดมะม่วงหิมพานต์ปั่นละเอียด"]
    }
  },
  {
    id: "h10",
    name: "ชูร์โรสปาท่องโก๋สเปน (Churros)",
    type: "sweet",
    cuisine: "Spanish",
    diet: ["Vegetarian"],
    caloriesPerServing: 290,
    macros: { protein: 4, carbs: 42, fat: 12 },
    prepTime: 15,
    cookTime: 15,
    description: "แป้งทอดสเปนผิวนอกกรอบสีเหลืองทอง ด้านในเหนียวนุ่ม คลุกเคล้าน้ำตาลผสมผงอบเชยหอมๆ เสิร์ฟคู่กับดิปซอสช็อกโกแลตอุ่นเข้มข้น",
    image: "Image/churros.png",
    ingredients: [
      { id: "i-allpurpose-flour", name: "แป้งอเนกประสงค์", amount: 120, unit: "g", caloriesPerGram: 3.6, protein: 0.1, carbs: 0.76, fat: 0.01 },
      { id: "i-butter-salted", name: "เนยสดชนิดเค็ม", amount: 40, unit: "g", caloriesPerGram: 7.2, protein: 0.01, carbs: 0.0, fat: 0.8 },
      { id: "i-chocolate-chips", name: "ดาร์กช็อกโกแลตชิป (สำหรับทำซอส)", amount: 60, unit: "g", caloriesPerGram: 5.2, protein: 0.05, carbs: 0.55, fat: 0.32 },
      { id: "i-sugar-cinnamon", name: "น้ำตาลทรายผสมผงอบเชย", amount: 30, unit: "g", caloriesPerGram: 3.9, protein: 0.0, carbs: 0.99, fat: 0.0 },
      { id: "i-frying-oil", name: "น้ำมันสำหรับทอด", amount: 200, unit: "ml", caloriesPerGram: 8.8, protein: 0.0, carbs: 0.0, fat: 1.0 }
    ],
    steps: [
      { step: 1, text: "ทำดิปช็อกโกแลต: ละลายช็อกโกแลตชิปกับวิปปิ้งครีมเล็กน้อยในไมโครเวฟหรือตุ๋นบนน้ำร้อน คนจนเนื้อเนียนวาวอุ่น พักไว้", duration: 180 },
      { step: 2, text: "ต้มน้ำสะอาดประมาณ 150 มล. เนยสด และน้ำตาลทรายเล็กน้อยในหม้อขนาดกลางจนเนยละลายและเดือดพล่าน", duration: 180 },
      { step: 3, text: "ยกลงจากเตา เทแป้งอเนกประสงค์ลงไปทั้งหมดทันที รีบคนด้วยพายไม้จนแป้งจับตัวเป็นก้อนโดและไม่ติดขอบหม้อ", duration: 120 },
      { step: 4, text: "ตักแป้งใส่ถุงบีบที่ใส่หัวบีบรูปดาวแฉกสำหรับชูร์โรสบีบง่าย", duration: 90 },
      { step: 5, text: "ตั้งกระทะใส่น้ำมันลึก รอร้อนไฟกลาง บีบแป้งเป็นเส้นยาวประมาณ 4-5 นิ้ว ใช้กรรไกรตัดปลายแป้งหย่อนลงทอดจนเหลืองกรอบทองสุกสม่ำเสมอ (ด้านละ 2 นาที)", duration: 240 },
      { step: 6, text: "ตักขึ้นสะเด็ดน้ำมัน นำไปคลุกกับผงน้ำตาลทรายผสมอบเชยให้เคลือบทั่วชิ้น จัดวางใส่จานเสิร์ฟพร้อมซอสช็อกโกแลตอุ่นๆ", duration: 60 }
    ],
    alternativeIngredients: {
      "i-butter-salted": ["น้ำมันมะพร้าวบริสุทธิ์"],
      "i-chocolate-chips": ["นมข้นหวานกลิ่นมะพร้าว", "แยมสตรอว์เบอร์รีดิป"]
    }
  }
];

// รายการคำศัพท์ Adjectives, Bases, Forms เพื่อสร้าง วัตถุดิบ 1,500+ ชนิดแบบจำลองไดนามิก
const ADJECTIVES = ["Organic", "Fresh", "Pure", "Smoked", "Dried", "Roasted", "Baked", "Toasted", "Salted", "Unsalted", "Sweetened", "Unsweetened", "Gluten-Free", "Low-Fat", "Spicy", "Pickled", "Crushed", "Minced", "Sliced", "Powdered", "Premium", "Raw", "Natural", "Wild-Caught", "Home-Grown", "Local", "Extra-Virgin", "Cold-Pressed", "Double-Concentrated", "Aromatic"];
const BASES = [
  { name: "Chicken", cal: 1.5, p: 0.22, c: 0, f: 0.07 },
  { name: "Beef", cal: 2.5, p: 0.2, c: 0, f: 0.18 },
  { name: "Pork", cal: 2.4, p: 0.18, c: 0, f: 0.18 },
  { name: "Salmon", cal: 2.0, p: 0.2, c: 0, f: 0.13 },
  { name: "Tuna", cal: 1.3, p: 0.28, c: 0, f: 0.01 },
  { name: "Shrimp", cal: 1.2, p: 0.24, c: 0.01, f: 0.02 },
  { name: "Egg", cal: 1.5, p: 0.13, c: 0.01, f: 0.1 },
  { name: "Milk", cal: 0.6, p: 0.03, c: 0.05, f: 0.032 },
  { name: "Cheese", cal: 4.0, p: 0.25, c: 0.01, f: 0.33 },
  { name: "Butter", cal: 7.2, p: 0.01, c: 0, f: 0.8 },
  { name: "Yogurt", cal: 0.6, p: 0.04, c: 0.04, f: 0.03 },
  { name: "Flour", cal: 3.6, p: 0.1, c: 0.76, f: 0.01 },
  { name: "Sugar", cal: 4.0, p: 0, c: 1.0, f: 0 },
  { name: "Honey", cal: 3.0, p: 0, c: 0.82, f: 0 },
  { name: "Olive Oil", cal: 8.8, p: 0, c: 0, f: 1.0 },
  { name: "Rice", cal: 3.5, p: 0.07, c: 0.78, f: 0.01 },
  { name: "Noodle", cal: 3.5, p: 0.1, c: 0.75, f: 0.015 },
  { name: "Onion", cal: 0.4, p: 0.01, c: 0.09, f: 0.0 },
  { name: "Garlic", cal: 1.5, p: 0.06, c: 0.33, f: 0.0 },
  { name: "Tomato", cal: 0.2, p: 0.01, c: 0.04, f: 0.0 },
  { name: "Potato", cal: 0.8, p: 0.02, c: 0.17, f: 0.0 },
  { name: "Carrot", cal: 0.4, p: 0.01, c: 0.1, f: 0.0 },
  { name: "Broccoli", cal: 0.35, p: 0.03, c: 0.07, f: 0.0 },
  { name: "Spinach", cal: 0.23, p: 0.03, c: 0.04, f: 0.0 },
  { name: "Mushroom", cal: 0.3, p: 0.03, c: 0.05, f: 0.0 },
  { name: "Avocado", cal: 1.6, p: 0.02, c: 0.09, f: 0.15 },
  { name: "Apple", cal: 0.52, p: 0.0, c: 0.14, f: 0.0 },
  { name: "Banana", cal: 0.89, p: 0.01, c: 0.23, f: 0.0 },
  { name: "Strawberry", cal: 0.32, p: 0.01, c: 0.08, f: 0.0 },
  { name: "Lemon", cal: 0.3, p: 0.01, c: 0.09, f: 0.0 },
  { name: "Lime", cal: 0.3, p: 0.01, c: 0.09, f: 0.0 },
  { name: "Chocolate", cal: 5.4, p: 0.05, c: 0.6, f: 0.3 },
  { name: "Vanilla", cal: 2.5, p: 0, c: 0.12, f: 0.0 },
  { name: "Almond", cal: 5.8, p: 0.21, c: 0.22, f: 0.49 },
  { name: "Coconut", cal: 3.5, p: 0.03, c: 0.15, f: 0.33 },
  { name: "Basil", cal: 0.2, p: 0.03, c: 0.03, f: 0.0 },
  { name: "Cinnamon", cal: 2.5, p: 0.04, c: 0.8, f: 0.01 },
  { name: "Salt", cal: 0, p: 0, c: 0, f: 0 },
  { name: "Pepper", cal: 2.5, p: 0.1, c: 0.6, f: 0.03 },
  { name: "Soy Sauce", cal: 0.6, p: 0.06, c: 0.06, f: 0.0 },
  { name: "Fish Sauce", cal: 0.6, p: 0.05, c: 0.02, f: 0.0 },
  { name: "Oyster Sauce", cal: 1.2, p: 0.03, c: 0.25, f: 0.0 },
  { name: "Cabbage", cal: 0.25, p: 0.01, c: 0.06, f: 0.0 }
];
const FORMS = ["Breast", "Thigh", "Fillet", "Powder", "Extract", "Syrup", "Paste", "Sauce", "Flakes", "Oil", "Seeds", "Chips", "Chunks", "Slices", "Dice", "Strips", "Cubes", "Essence", "Cream"];

// ฟังก์ชันสร้างคลังวัตถุดิบ 1,500+ รายการแบบ deterministic
export const generateIngredientsDatabase = () => {
  const list = [];
  let count = 0;
  
  // ใส่วัตถุดิบเริ่มต้นหลักก่อน
  const mainIngredients = [
    { id: "i-rice-noodle", name: "เส้นเล็กแห้ง (Dry Rice Noodles)", caloriesPerGram: 3.5, protein: 0.05, carbs: 0.8, fat: 0.01 },
    { id: "i-shrimp", name: "กุ้งสดปอกเปลือก (Fresh Shrimp)", caloriesPerGram: 1.2, protein: 0.24, carbs: 0.01, fat: 0.02 },
    { id: "i-padthai-sauce", name: "ซอสมะขามเปียกปรุงรส (Pad Thai Sauce)", caloriesPerGram: 1.8, protein: 0.02, carbs: 0.4, fat: 0.02 },
    { id: "i-tofu", name: "เต้าหู้เหลืองหั่นเต๋า (Yellow Tofu)", caloriesPerGram: 1.4, protein: 0.12, carbs: 0.03, fat: 0.08 },
    { id: "i-egg", name: "ไข่ไก่ (Chicken Egg)", caloriesPerGram: 1.5, protein: 0.13, carbs: 0.01, fat: 0.1 },
    { id: "i-shallot", name: "หอมแดงสับ (Minced Shallot)", caloriesPerGram: 0.4, protein: 0.01, carbs: 0.09, fat: 0.0 },
    { id: "i-chive", name: "ใบกุยช่ายหั่นท่อน (Garlic Chives)", caloriesPerGram: 0.3, protein: 0.02, carbs: 0.04, fat: 0.0 },
    { id: "i-beansprout", name: "ถั่วงอก (Bean Sprouts)", caloriesPerGram: 0.3, protein: 0.03, carbs: 0.06, fat: 0.0 },
    { id: "i-mushroom-straw", name: "เห็ดฟาง (Straw Mushroom)", caloriesPerGram: 0.3, protein: 0.03, carbs: 0.05, fat: 0.0 },
    { id: "i-lemongrass", name: "ตะไคร้หั่นท่อนทุบ (Lemongrass)", caloriesPerGram: 0.2, protein: 0.01, carbs: 0.05, fat: 0.0 },
    { id: "i-galangal", name: "ข่าหั่นแว่น (Galangal)", caloriesPerGram: 0.2, protein: 0.01, carbs: 0.05, fat: 0.0 },
    { id: "i-limeleaf", name: "ใบมะกรูดฉีก (Kaffir Lime Leaves)", caloriesPerGram: 0.2, protein: 0.01, carbs: 0.05, fat: 0.0 },
    { id: "i-chili-paste", name: "น้ำพริกเผา (Chili Paste)", caloriesPerGram: 4.5, protein: 0.04, carbs: 0.35, fat: 0.3 },
    { id: "i-evaporated-milk", name: "นมข้นจืด (Evaporated Milk)", caloriesPerGram: 1.4, protein: 0.07, carbs: 0.1, fat: 0.08 },
    { id: "i-lime-juice", name: "น้ำมะนาวสด (Fresh Lime Juice)", caloriesPerGram: 0.3, protein: 0.0, carbs: 0.09, fat: 0.0 },
    { id: "i-fish-sauce", name: "น้ำปลาดี (Fish Sauce)", caloriesPerGram: 0.6, protein: 0.05, carbs: 0.02, fat: 0.0 },
    { id: "i-glutinous-rice", name: "ข้าวเหนียวเขี้ยวงู (Glutinous Rice)", caloriesPerGram: 3.6, protein: 0.07, carbs: 0.8, fat: 0.01 },
    { id: "i-mango", name: "มะม่วงน้ำดอกไม้สุก (Sweet Mango)", caloriesPerGram: 0.6, protein: 0.01, carbs: 0.15, fat: 0.0 },
    { id: "i-coconut-milk", name: "หัวกะทิเข้มข้น (Coconut Milk)", caloriesPerGram: 2.3, protein: 0.02, carbs: 0.06, fat: 0.24 },
    { id: "i-sugar", name: "น้ำตาลทรายขาว (White Sugar)", caloriesPerGram: 4.0, protein: 0.0, carbs: 1.0, fat: 0.0 },
    { id: "i-salt", name: "เกลือป่น (Salt)", caloriesPerGram: 0.0, protein: 0.0, carbs: 0.0, fat: 0.0 },
    { id: "i-split-mungbean", name: "ถั่วทองคั่ว (Split Mung Beans)", caloriesPerGram: 3.4, protein: 0.22, carbs: 0.6, fat: 0.01 }
  ];
  
  list.push(...mainIngredients);
  
  // เจนวัตถุดิบผสมผสานเพิ่มเติมให้ครบ 1,550 ชนิด
  for (let b = 0; b < BASES.length; b++) {
    const baseObj = BASES[b];
    for (let a = 0; a < ADJECTIVES.length; a++) {
      const adj = ADJECTIVES[a];
      for (let f = 0; f < FORMS.length; f++) {
        const form = FORMS[f];
        
        const ingNameEN = `${adj} ${baseObj.name} ${form}`;
        // สร้างการแปลงคำศัพท์เป็นชื่อภาษาไทยที่ดูน่ารักเป็นธรรมชาติ
        let thaiBase = baseObj.name;
        if (baseObj.name === "Chicken") thaiBase = "เนื้อไก่";
        else if (baseObj.name === "Beef") thaiBase = "เนื้อวัว";
        else if (baseObj.name === "Pork") thaiBase = "เนื้อหมู";
        else if (baseObj.name === "Salmon") thaiBase = "แซลมอน";
        else if (baseObj.name === "Tuna") thaiBase = "ทูน่า";
        else if (baseObj.name === "Shrimp") thaiBase = "กุ้ง";
        else if (baseObj.name === "Egg") thaiBase = "ไข่";
        else if (baseObj.name === "Milk") thaiBase = "นม";
        else if (baseObj.name === "Cheese") thaiBase = "ชีส";
        else if (baseObj.name === "Butter") thaiBase = "เนย";
        else if (baseObj.name === "Yogurt") thaiBase = "โยเกิร์ต";
        else if (baseObj.name === "Flour") thaiBase = "แป้ง";
        else if (baseObj.name === "Sugar") thaiBase = "น้ำตาล";
        else if (baseObj.name === "Honey") thaiBase = "น้ำผึ้ง";
        else if (baseObj.name === "Olive Oil") thaiBase = "น้ำมันมะกอก";
        else if (baseObj.name === "Rice") thaiBase = "ข้าว";
        else if (baseObj.name === "Noodle") thaiBase = "เส้น";
        
        let thaiAdj = adj;
        if (adj === "Organic") thaiAdj = "ออร์แกนิก";
        else if (adj === "Fresh") thaiAdj = "สด";
        else if (adj === "Pure") thaiAdj = "บริสุทธิ์";
        else if (adj === "Smoked") thaiAdj = "รมควัน";
        else if (adj === "Dried") thaiAdj = "อบแห้ง";
        else if (adj === "Roasted") thaiAdj = "คั่ว";
        else if (adj === "Baked") thaiAdj = "อบ";
        else if (adj === "Toasted") thaiAdj = "ปิ้งเกรียม";
        else if (adj === "Salted") thaiAdj = "ผสมเกลือ";
        else if (adj === "Unsalted") thaiAdj = "ไม่เค็ม";
        else if (adj === "Spicy") thaiAdj = "รสเผ็ด";
        else if (adj === "Low-Fat") thaiAdj = "ไขมันต่ำ";
        else if (adj === "Gluten-Free") thaiAdj = "ปราศจากกลูเตน";

        let thaiForm = form;
        if (form === "Breast") thaiForm = "ส่วนอก";
        else if (form === "Thigh") thaiForm = "ส่วนสะโพก";
        else if (form === "Fillet") thaiForm = "ชิ้นเนื้อไม่มีกระดูก";
        else if (form === "Powder") thaiForm = "ชนิดผง";
        else if (form === "Extract") thaiForm = "สกัดเข้มข้น";
        else if (form === "Syrup") thaiForm = "ไซรัป";
        else if (form === "Paste") thaiForm = "พริกแกง/ซอสข้น";
        else if (form === "Oil") thaiForm = "สกัดน้ำมัน";
        else if (form === "Slices") thaiForm = "สไลด์แว่น";
        else if (form === "Dice") thaiForm = "หั่นเต๋า";
        else if (form === "Cubes") thaiForm = "หั่นลูกเต๋า";

        const ingNameTH = `${thaiBase}${thaiForm ? thaiForm : ""}${thaiAdj ? " " + thaiAdj : ""}`;
        
        const id = `ing-gen-${count}`;
        list.push({
          id,
          name: `${ingNameTH} (${ingNameEN})`,
          caloriesPerGram: parseFloat((baseObj.cal * (0.8 + Math.random() * 0.4)).toFixed(2)),
          protein: parseFloat((baseObj.p * (0.9 + Math.random() * 0.2)).toFixed(3)),
          carbs: parseFloat((baseObj.c * (0.9 + Math.random() * 0.2)).toFixed(3)),
          fat: parseFloat((baseObj.f * (0.9 + Math.random() * 0.2)).toFixed(3))
        });
        count++;
        
        if (list.length >= 1550) {
          return list;
        }
      }
    }
  }
  return list;
};

// ฟังก์ชันสร้างเมนูจำลองคาว 150 และหวาน 150 (รวม 300 เมนู) แบบไดนามิก
export const generateFullRecipesDatabase = (ingredientsDb) => {
  const recipes = [...highFidelityRecipes];
  
  const savoryNames = [
    "ข้าวผัดกะเพราไข่ดาว", "ต้มข่าไก่", "ผัดซีอิ๊วหมู", "แกงเขียวหวานไก่", "แกงส้มชะอมกุ้ง",
    "ข้าวผัดกุ้ง", "หมูทอดกระเทียม", "ก๋วยเตี๋ยวเรือน้ำตก", "มัสมั่นเนื้อ", "ข้าวมันไก่ตอน",
    "ส้มตำไทยไข่เค็ม", "ลาบหมูแซ่บ", "น้ำตกคอหมูย่าง", "แกงเผ็ดเป็ดย่าง", "ห่อหมกปลาช่อน",
    "ทอดมันกุ้ง", "แกงป่าไก่บ้าน", "ข้าวหมูแดงหมูกรอบ", "เย็นตาโฟหม้อไฟ", "คั่วกลิ้งหมูสับ",
    "ซุปข้นมะเขือเทศสไตล์ฝรั่งเศส", "ราเมนซุปมิโซะกุ้ง", "สเต็กเนื้อริบอายพรีเมียม", "ทาโก้เนื้อสับสไตล์เม็กซิกัน",
    "ข้าวหมกไก่บริยานี", "ฟิชแอนด์ชิปส์กรอบนอกนุ่มใน", "พาสต้าซอสครีมเห็ดทรัฟเฟิล", "ลาซัญญาเนื้อหอมชีส",
    "อกไก่อบสมุนไพรไขมันต่ำ", "แซลมอนย่างเกลือสไตล์ญี่ปุ่น", "สลัดควินัวผักรวมออร์แกนิก", "ซุปกิมจิเต้าหู้อ่อน",
    "ต็อกบกกีชีสยืด", "ไก่ทอดเกาหลีซอสสไปซี่", "ยำวุ้นเส้นทะเลโบราณ", "แกงจืดเต้าหู้หมูสับใบตำลึง",
    "ไข่เจียวปูฟูกรอบ", "น้ำพริกหนุ่มผักลวกแคบหมู", "ขนมจีนน้ำยาปูเผ็ดร้อน", "ซี่โครงหมูอบน้ำผึ้งเกรียม",
    "ข้าวซอยไก่ล้านนา", "หอยลายผัดน้ำพริกเผา", "ยำแซลมอนสดใส่น้ำปลาร้า", "กุ้งอบวุ้นเส้นหม้อดิน",
    "เนื้อย่างจิ้มแจ่วรสเด็ด", "ไก่อบฟางสมุนไพร", "ปลาช่อนลุยสวน", "พะแนงหมูขลุกขลิก", "ต้มจืดมะระยัดไส้หมูสับ",
    "ก๋วยเตี๋ยวคั่วไก่เตาถ่าน", "สเต็กแซลมอนซอสเนยมะนาว", "เกี๊ยวซ่าหมูทอดสไตล์โอซาก้า", "แกงเลียงผักรวมกุ้งสด",
    "ต้มแซ่บกระดูกอ่อน", "ผัดพริกแกงถั่วฝักยาวหมูกรอบ", "คะน้าหมูกรอบราดข้าว", "ผัดผักบุ้งไฟแดง",
    "ยำคอหมูย่างแตงกวา", "เต้าหู้ทรงเครื่องหมูสับ", "ไก่ผัดเม็ดมะม่วงหิมพานต์", "ปลาทูนึ่งแม่กลองทอด",
    "แกงไตปลาปักษ์ใต้", "น้ำพริกกะปิปลาทูทอด", "ผัดฉ่าทะเลเดือด", "ปูผัดผงกะหรี่", "ปลาดุกฟูผัดเผ็ด",
    "ลาบเป็ดเอ็ดแซ่บ", "น้ำตกเนื้อสไลด์โคขุน", "เนื้อแดดเดียวทอดงา", "ปีกไก่ทอดเกลือสมุนไพร"
  ];
  
  const sweetNames = [
    "บัวลอยสามสีไข่หวาน", "กล้วยบวชชีหอมกะทิ", "ข้าวเหนียวเปียกข้าวโพด", "ทับทิมกรอบน้ำกะทิอบควันเทียน", "ขนมหม้อแกงเผือกฝอยทอง",
    "ขนมครกสิงคโปร์ใบเตย", "ขนมถ้วยโบราณหน้ากะทิ", "ขนมเบื้องไส้หวานฝอยทอง", "ซ่าหริ่มน้ำกะทิอบอบเชย", "ทองหยิบ ทองหยอด ฝอยทอง",
    "สังขยาฟักทองเนื้อเนียน", "ขนมต้มใบเตยคลุกมะพร้าว", "ข้าวเหนียวมะม่วงแฟนซี", "ขนมสอดไส้ประยุกต์", "เฉาก๊วยนมสดน้ำตาลทรายแดง",
    "มาการองดาร์กช็อกโกแลตสไตล์ปารีส", "เครปเค้กซอสสตรอว์เบอร์รีเข้มข้น", "มูสเค้กช็อกโกแลตคีโต", "บลูเบอร์รีชีสพายโฮมเมด",
    "วาฟเฟิลไอศกรีมวานิลลาหนานุ่ม", "ช็อกโกแลตฟองดูว์กับผลไม้รวม", "แพนเค้กเนยสดราดเมเปิลไซรัป", "ซูเฟล่แพนเค้กญี่ปุ่นเด้งดึ๋ง",
    "พุดดิ้งชาเขียวมัทฉะนมสด", "ทาร์ตไข่สไตล์มาเก๊า", "ครัวซองต์เนยฝรั่งเศสกรอบนอกนุ่มใน", "ไอศกรีมกะทิสดทรงเครื่องถั่วลิสง",
    "ขนมไข่เต่ามันม่วงทอดกรอบ", "โดนัทเคลือบน้ำตาลคลาสสิก", "คุกกี้ช็อกโกแลตชิปเนยสด", "พายมะพร้าวอ่อนลาวา",
    "วุ้นกะทิใบเตยแฟนซี", "ถั่วเขียวต้มน้ำตาลทรายแดง", "มันเชื่อมราดน้ำกะทิข้น", "ลอดช่องวัดเจษแท้น้ำกะทิ",
    "ขนมสอดไส้ใบเตยสูตรโบราณ", "สังขยาใบเตยดิปขนมปังนึ่ง", "ส้มฉุนน้ำลอยแก้วผลไม้โบราณ", "ลูกตาลลอยแก้วเย็นชื่นใจ",
    "กระท้อนลอยแก้วรสหวานแซ่บ", "กล้วยทอดหน้าโบราณ", "ข้าวตูมะพร้าวอ่อนน้ำผึ้ง", "ขนมถั่วแปบสีรุ้งคลุกมะพร้าว",
    "ขนมบ้าบิ่นมะพร้าวอ่อนเกรียมนอกนุ่มใน", "ขนมชั้นอัญชันซ้อนชั้น", "ข้าวต้มมัดไส้กล้วยหวานมัน", "ขนมกล้วยปิ้งราดน้ำเชื่อมมะพร้าว",
    "พุดดิ้งมะพร้าวอ่อนนมสดลาวา", "วุ้นลูกชุบผลไม้หลากสี", "เยลลี่ผลไม้สดรวมน้ำหวาน", "ไอศกรีมชาเย็นโบราณท็อปวิปครีม"
  ];
  
  // ตัวสร้างสูตรอาหารจำลองคาวเพิ่มเติมให้ครบ 150 เมนู
  let idCounter = 1;
  const targetSavoryCount = 150;
  let savoryIndex = 0;
  
  const existingSavoryCount = recipes.filter(r => r.type === "savory").length;
  for (let s = existingSavoryCount; s < targetSavoryCount; s++) {
    const name = savoryNames[savoryIndex % savoryNames.length] + ` (สูตรที่ ${s + 1})`;
    savoryIndex++;
    
    // ดึงวัตถุดิบสุ่ม 4-6 ชนิดจาก DB วัตถุดิบ
    const recipeIngredients = [];
    const ingCount = 4 + Math.floor(Math.random() * 3);
    const addedIds = new Set();
    
    for (let k = 0; k < ingCount; k++) {
      let randIng = ingredientsDb[Math.floor(Math.random() * ingredientsDb.length)];
      while (addedIds.has(randIng.id) || randIng.id.startsWith("i-")) {
        randIng = ingredientsDb[Math.floor(Math.random() * ingredientsDb.length)];
      }
      addedIds.add(randIng.id);
      recipeIngredients.push({
        ...randIng,
        amount: Math.floor(20 + Math.random() * 150),
        unit: "g"
      });
    }
    
    // เติมวัตถุดิบปรุงรสพื้นฐานให้สมบูรณ์
    recipeIngredients.push(
      { id: "i-salt", name: "เกลือป่น", amount: 2, unit: "g", caloriesPerGram: 0, protein: 0, carbs: 0, fat: 0 },
      { id: "i-sugar", name: "น้ำตาลทราย", amount: 5, unit: "g", caloriesPerGram: 4, protein: 0, carbs: 1.0, fat: 0 }
    );
    
    // คำนวณแคลรวมและโปรตีน/คาร์บ/ไขมันรวม
    let totalCal = 0;
    let totalP = 0;
    let totalC = 0;
    let totalF = 0;
    recipeIngredients.forEach(ing => {
      const g = ing.amount;
      totalCal += g * ing.caloriesPerGram;
      totalP += g * ing.protein;
      totalC += g * ing.carbs;
      totalF += g * ing.fat;
    });
    
    recipes.push({
      id: `gen-savory-${idCounter++}`,
      name,
      type: "savory",
      cuisine: ["Thai", "Japanese", "Italian", "Indian", "French", "Mexican"][Math.floor(Math.random() * 6)],
      diet: Math.random() > 0.5 ? ["Halal"] : [],
      caloriesPerServing: Math.round(totalCal),
      macros: {
        protein: Math.round(totalP),
        carbs: Math.round(totalC),
        fat: Math.round(totalF)
      },
      prepTime: 10 + Math.floor(Math.random() * 15),
      cookTime: 10 + Math.floor(Math.random() * 20),
      description: `เมนูอาหารคาวแสนอร่อยสไตล์สร้างสรรค์ ปรุงง่าย ดีต่อสุขภาพ อุดมไปด้วยโปรตีนและสารอาหารที่ครบถ้วน เหมาะสำหรับทุกวัน`,
      image: (() => {
        if (name.includes("แกงเขียวหวาน") || name.includes("กะเพรา") || name.includes("ผัดไทย")) return "Image/pad_thai.png";
        if (name.includes("ต้ม") || name.includes("ซุป") || name.includes("แกงส้ม") || name.includes("ต้มยำ")) return "Image/tom_yum.png";
        if (name.includes("พาสต้า") || name.includes("สปาเก็ตตี้")) return "Image/carbonara.png";
        if (name.includes("พิซซ่า") || name.includes("ทาโก้")) return "Image/pizza_margherita.png";
        if (name.includes("ราเมน") || name.includes("บะหมี่") || name.includes("ก๋วยเตี๋ยว")) return "Image/ramen.png";
        if (name.includes("แกงเผ็ด") || name.includes("ไก่ผัด") || name.includes("มัสมั่น") || name.includes("แกงบัตเตอร์") || name.includes("พะแนง")) return "Image/butter_chicken.png";
        return "Image/pad_thai.png";
      })(),
      ingredients: recipeIngredients,
      steps: [
        { step: 1, text: "จัดเตรียมวัตถุดิบและล้างทำความสะอาดผักและเนื้อสัตว์ให้เรียบร้อยหั่นตามขนาดต้องการ", duration: 60 },
        { step: 2, text: "ตั้งกระทะไฟปานกลาง ใส่เนยหรือน้ำมันมะกอกเล็กน้อย นำเครื่องแกงหรือหอมแดงกระเทียมสับลงผัดจนเหลืองหอม", duration: 90 },
        { step: 3, text: "ใส่เนื้อสัตว์ลงไปผัดจนเริ่มสุกประมาณ 70% ปรุงรสด้วยเกลือป่น น้ำตาล และซอสตามชอบ", duration: 180 },
        { step: 4, text: "ใส่ผักสดที่สุกยากลงไปผัดก่อน ตามด้วยผักใบเขียว ผัดเร็วๆ ด้วยไฟแรงเพื่อคงความกรอบหวานธรรมชาติ", duration: 120 },
        { step: 5, text: "ตักใส่จาน ตกแต่งด้วยพริกสดหั่นแว่นและใบโหระพา พร้อมเสิร์ฟคู่กับข้าวสวยร้อนๆ", duration: 45 }
      ],
      alternativeIngredients: {
        [recipeIngredients[0].id]: ["วัตถุดิบทดแทนเกรดพรีเมียมตามชอบ"]
      }
    });
  }

  // ตัวสร้างสูตรอาหารจำลองหวานเพิ่มเติมให้ครบ 150 เมนู
  const targetSweetCount = 150;
  let sweetIndex = 0;
  
  const existingSweetCount = recipes.filter(r => r.type === "sweet").length;
  for (let s = existingSweetCount; s < targetSweetCount; s++) {
    const name = sweetNames[sweetIndex % sweetNames.length] + ` (สูตรที่ ${s + 1})`;
    sweetIndex++;
    
    // ดึงวัตถุดิบสุ่ม 4-6 ชนิดจาก DB วัตถุดิบ
    const recipeIngredients = [];
    const ingCount = 3 + Math.floor(Math.random() * 3);
    const addedIds = new Set();
    
    for (let k = 0; k < ingCount; k++) {
      let randIng = ingredientsDb[Math.floor(Math.random() * ingredientsDb.length)];
      while (addedIds.has(randIng.id) || randIng.id.startsWith("i-")) {
        randIng = ingredientsDb[Math.floor(Math.random() * ingredientsDb.length)];
      }
      addedIds.add(randIng.id);
      recipeIngredients.push({
        ...randIng,
        amount: Math.floor(20 + Math.random() * 100),
        unit: "g"
      });
    }
    
    // เติมเนยน้ำตาลพื้นฐานสำหรับของหวาน
    recipeIngredients.push(
      { id: "i-sugar", name: "น้ำตาลทรายขาว", amount: 30, unit: "g", caloriesPerGram: 4.0, protein: 0, carbs: 1.0, fat: 0 },
      { id: "i-coconut-milk", name: "หัวกะทิเข้มข้น", amount: 50, unit: "ml", caloriesPerGram: 2.3, protein: 0.02, carbs: 0.06, fat: 0.24 }
    );
    
    // คำนวณแคลรวมและโปรตีน/คาร์บ/ไขมันรวม
    let totalCal = 0;
    let totalP = 0;
    let totalC = 0;
    let totalF = 0;
    recipeIngredients.forEach(ing => {
      const g = ing.amount;
      totalCal += g * ing.caloriesPerGram;
      totalP += g * ing.protein;
      totalC += g * ing.carbs;
      totalF += g * ing.fat;
    });
    
    recipes.push({
      id: `gen-sweet-${idCounter++}`,
      name,
      type: "sweet",
      cuisine: ["Thai", "Japanese", "Italian", "Indian", "French", "Spanish"][Math.floor(Math.random() * 6)],
      diet: ["Vegetarian", "Gluten-Free", "Vegan"][Math.floor(Math.random() * 3)] ? [["Vegetarian", "Gluten-Free", "Vegan"][Math.floor(Math.random() * 3)]] : [],
      caloriesPerServing: Math.round(totalCal),
      macros: {
        protein: Math.round(totalP),
        carbs: Math.round(totalC),
        fat: Math.round(totalF)
      },
      prepTime: 15 + Math.floor(Math.random() * 20),
      cookTime: 10 + Math.floor(Math.random() * 30),
      description: `เมนูของหวานแสนอร่อย ละมุนลิ้น รสชาติหวานมันกำลังดี เหมาะสำหรับทานหลังมื้ออาหารหรือเป็นขนมว่างยามบ่าย`,
      image: (() => {
        if (name.includes("ข้าวเหนียว") || name.includes("กล้วยบวชชี") || name.includes("ลอดช่อง") || name.includes("เปียกข้าวโพด")) return "Image/mango_sticky_rice.png";
        if (name.includes("เค้ก") || name.includes("ทีรามิสุ") || name.includes("พุดดิ้ง") || name.includes("มูสเค้ก")) return "Image/tiramisu.png";
        if (name.includes("ไดฟูกุ") || name.includes("โมจิ") || name.includes("ขนมต้ม") || name.includes("บัวลอย")) return "Image/daifuku.png";
        if (name.includes("ปาท่องโก๋") || name.includes("ชูร์โรส") || name.includes("คุกกี้") || name.includes("โดนัท") || name.includes("วาฟเฟิล")) return "Image/churros.png";
        return "Image/mango_sticky_rice.png";
      })(),
      ingredients: recipeIngredients,
      steps: [
        { step: 1, text: "เตรียมชามผสม ละลายน้ำตาลและแป้งเข้าด้วยกันตามสัดส่วนที่ระบุ", duration: 120 },
        { step: 2, text: "เติมหัวกะทิหรือนมสด ค่อยๆ ตะล่อมคนให้แป้งและส่วนผสมเข้ากันเป็นเนื้อเนียนกรองด้วยผ้าขาวบาง", duration: 240 },
        { step: 3, text: "ตั้งหม้อไฟอ่อน นำส่วนผสมขึ้นกวนจนเริ่มสุกใสเหนียวข้น หรือเทใส่แม่พิมพ์นำไปนึ่ง/อบด้วยไฟกลาง", duration: 600 },
        { step: 4, text: "จัดชิ้นขนมหรือผลไม้เคียงจาน ตกแต่งด้วยมะพร้าวทึนทึกขูดเส้นหรือราดหน้ากะทิข้นและโรยเกลือเล็กน้อย", duration: 180 },
        { step: 5, text: "พักไว้ให้เย็นสนิท หรือแช่ตู้เย็นให้เซ็ตตัวดีก่อนนำมาเสิร์ฟและทานเล่น", duration: 300 }
      ],
      alternativeIngredients: {
        [recipeIngredients[0].id]: ["ส่วนผสมทดแทนเพื่อสุขภาพตามชอบ"]
      }
    });
  }

  return recipes;
};

// =========================================
// 🍽️ MENU ITEMS DATA
// =========================================
export const menuItems = [
  {
    id: 1,
    name: "ผัดไทยกุ้งสด",
    description: "ผัดไทยเส้นจันท์เหนียวนุ่ม ผัดซอสสูตรเข้มข้น เสิร์ฟพร้อมกุ้งตัวโต",
    price: "250 ฿",
    image: "/Image/pad_thai.png",
    keyword: "padthai,noodles"
  },
  {
    id: 2,
    name: "พิซซ่ามาร์เกริต้า",
    description: "พิซซ่าเตาถ่าน แป้งบางกรอบ หอมกลิ่นใบโหระพาและชีสมอสซาเรลลา",
    price: "450 ฿",
    image: "/Image/pizza_margherita.png",
    keyword: "pizza,margherita"
  },
  {
    id: 3,
    name: "สเต็กเนื้อพรีเมียม",
    description: "สเต็กเนื้อวัวเกรดพรีเมียม ย่างถ่านระดับความสุกตามชอบ เนื้อนุ่มฉ่ำละมุนรสเข้มข้น",
    price: "890 ฿",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop",
    keyword: "steak,beef"
  }
];
