import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, 
  Search, 
  Dices, 
  Users, 
  ChefHat, 
  Timer, 
  Mic, 
  Plus, 
  Heart, 
  MessageSquare, 
  Share2, 
  Globe, 
  Settings, 
  LogOut, 
  Bell, 
  Scale, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Moon, 
  Sun,
  Camera,
  Trash2,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { generateIngredientsDatabase, generateFullRecipesDatabase } from './data/recipesData';

// คลังคำศัพท์คำแปลภาษาต่างๆ
const TRANSLATIONS = {
  th: {
    welcome: "ยินดีต้อนรับสู่ N.Food",
    slogan: "ปฏิวัติการทำอาหารและการดูแลสุขภาพในยุคใหม่",
    searchPlaceholder: "ค้นหาเมนูอาหารหรือวัตถุดิบ...",
    all: "ทั้งหมด",
    savory: "อาหารคาว",
    sweet: "อาหารหวาน",
    cuisine: "สัญชาติอาหาร",
    diet: "ประเภทสุขภาพ",
    servings: "จำนวนเสิร์ฟ",
    prepTime: "เวลาเตรียม",
    cookTime: "เวลาทำ",
    min: "นาที",
    calories: "แคลอรี่รวม",
    protein: "โปรตีน",
    carbs: "คาร์บ",
    fat: "ไขมัน",
    startCooking: "เริ่มทำอาหาร (Cooking Mode)",
    customIngredients: "แก้ไขวัตถุดิบของคุณเอง",
    fridgeTitle: "ระบบสแกนตู้เย็น",
    fridgeSubtitle: "ติ๊กเลือกวัตถุดิบที่มีเพื่อค้นหาเมนูอาหารที่เหมาะสม",
    findRecipes: "ค้นหาเมนูแนะนำ",
    spinTitle: "วงล้อสุ่มอาหารและวัตถุดิบ",
    spinBtn: "หมุนวงล้อ",
    spinFood: "สุ่มเมนูอาหาร",
    spinIng: "สุ่มวัตถุดิบ",
    spinSubtitle: "คิดเมนูไม่ออก? ให้ N.Food ช่วยตัดสินใจ!",
    socialTitle: "ชุมชนคนทำอาหาร N.Food",
    postBtn: "เขียนสูตรและแชร์สูตรของคุณ",
    postPlaceholder: "แชร์รูปภาพหรือความเห็นเกี่ยวกับมื้อนี้...",
    notifications: "การแจ้งเตือน",
    loginTitle: "เข้าสู่ระบบ N.Food",
    loginSubtitle: "Google, Line หรือเบอร์โทรศัพท์ (OTP)",
    loginSuccess: "เข้าสู่ระบบสำเร็จแล้ว",
    phoneInput: "เบอร์โทรศัพท์มือถือ",
    sendOtp: "ส่งรหัส OTP",
    enterOtp: "กรอกรหัส OTP 6 หลัก",
    submit: "ยืนยัน",
    alternativeIngTitle: "วัตถุดิบทดแทนแนะนำ:",
    communityDraftTitle: "เสนอเมนูอาหารของคุณเข้าสู่คลังระบบ",
    reviewTitle: "แดชบอร์ดแอดมิน (รอการตรวจสอบ)",
    approve: "อนุมัติ",
    reject: "ปฏิเสธ",
    recipeName: "ชื่อเมนูอาหาร",
    stepsLabel: "ขั้นตอนการปรุงอาหาร",
    addStepBtn: "เพิ่มขั้นตอน",
    addIngBtn: "เพิ่มวัตถุดิบ",
    ingredientsLabel: "วัตถุดิบและสัดส่วน (g / ml)",
    languageLabel: "เลือกภาษา",
    cookedBadge: "ทำแล้วนะ!",
    guestMode: "ข้ามเป็นผู้เยี่ยมชม",
    adminBadge: "สิทธิ์แอดมิน",
    voiceActive: "ระบบสั่งเสียงเปิดใช้งานแล้ว (พูด 'ถัดไป' หรือ 'กลับ')"
  },
  en: {
    welcome: "Welcome to N.Food",
    slogan: "Revolutionizing cooking and smart nutrition",
    searchPlaceholder: "Search recipes or ingredients...",
    all: "All",
    savory: "Savory",
    sweet: "Sweet",
    cuisine: "Cuisine",
    diet: "Dietary Info",
    servings: "Servings",
    prepTime: "Prep Time",
    cookTime: "Cook Time",
    min: "mins",
    calories: "Total Calories",
    protein: "Protein",
    carbs: "Carbs",
    fat: "Fat",
    startCooking: "Start Cooking Mode",
    customIngredients: "Customize Ingredients",
    fridgeTitle: "Smart Refrigerator Search",
    fridgeSubtitle: "Select the ingredients in your fridge to find matching recipes",
    findRecipes: "Find Recipes",
    spinTitle: "Interactive Spinning Wheel",
    spinBtn: "SPIN",
    spinFood: "Spin Food Menu",
    spinIng: "Spin Ingredients",
    spinSubtitle: "Don't know what to eat? Let N.Food decide for you!",
    socialTitle: "N.Food Community Feed",
    postBtn: "Create & Share Your Recipe",
    postPlaceholder: "Share a photo or comment about this meal...",
    notifications: "Notifications",
    loginTitle: "Log In to N.Food",
    loginSubtitle: "Via Google, Line, or Phone (OTP)",
    loginSuccess: "Successfully logged in",
    phoneInput: "Mobile Phone Number",
    sendOtp: "Send OTP Code",
    enterOtp: "Enter 6-Digit OTP",
    submit: "Verify",
    alternativeIngTitle: "Recommended Substitutes:",
    communityDraftTitle: "Submit Your Recipe to Global Database",
    reviewTitle: "Admin Moderation Dashboard",
    approve: "Approve",
    reject: "Reject",
    recipeName: "Recipe Title",
    stepsLabel: "Cooking Steps",
    addStepBtn: "Add Step",
    addIngBtn: "Add Ingredient",
    ingredientsLabel: "Ingredients & Proportions (g / ml)",
    languageLabel: "Language",
    cookedBadge: "Cooked This!",
    guestMode: "Continue as Guest",
    adminBadge: "Admin Privilege",
    voiceActive: "Voice Control Active (Say 'Next' or 'Back')"
  },
  jp: {
    welcome: "N.Food へようこそ",
    slogan: "次世代の料理とスマートな栄養計算",
    searchPlaceholder: "料理名または食材を検索...",
    all: "すべて",
    savory: "おかず",
    sweet: "スイーツ",
    cuisine: "料理スタイル",
    diet: "ダイエット食事",
    servings: "人数分",
    prepTime: "下準備",
    cookTime: "調理時間",
    min: "分",
    calories: "総カロリー",
    protein: "タンパク質",
    carbs: "炭水化物",
    fat: "脂質",
    startCooking: "クッキングモード開始",
    customIngredients: "食材をカスタマイズ",
    fridgeTitle: "冷蔵庫検索システム",
    fridgeSubtitle: "冷蔵庫にある食材を選んでレシピを見つけます",
    findRecipes: "レシピを検索",
    spinTitle: "ランダム抽選ホイール",
    spinBtn: "回す",
    spinFood: "料理をスุ่ม",
    spinIng: "食材をスุ่ม",
    spinSubtitle: "今日の献立に迷ったら、N.Foodに任せましょう！",
    socialTitle: "N.Food コミュニティフィード",
    postBtn: "レシピを作って共有する",
    postPlaceholder: "料理写真やレビューを投稿...",
    notifications: "通知センター",
    loginTitle: "N.Food にサインイン",
    loginSubtitle: "Google、Line、または携帯電話番号 (OTP)",
    loginSuccess: "ログインに成功しました",
    phoneInput: "携帯電話番号",
    sendOtp: "OTPコードを送信",
    enterOtp: "6桁のコードを入力",
    submit: "確認",
    alternativeIngTitle: "代替材料の提案:",
    communityDraftTitle: "グローバルデータベースにレシピを提出",
    reviewTitle: "管理者モデレーション",
    approve: "承認",
    reject: "却下",
    recipeName: "レシピ名",
    stepsLabel: "調理工程",
    addStepBtn: "工程を追加",
    addIngBtn: "食材を追加",
    ingredientsLabel: "材料と分量 (g / ml)",
    languageLabel: "言語選択",
    cookedBadge: "作ったよ！",
    guestMode: "ゲストとして続行",
    adminBadge: "管理者権限",
    voiceActive: "音声操作有効（「次へ」または「戻る」と話してください）"
  },
  ar: {
    welcome: "مرحباً بكم في N.Food",
    slogan: "ثورة في عالم الطهي والتغذية الذكية",
    searchPlaceholder: "ابحث عن الوجبات أو المكونات...",
    all: "الكل",
    savory: "أطباق رئيسية",
    sweet: "حلويات",
    cuisine: "نوع المطبخ",
    diet: "نوع الحمية",
    servings: "عدد الحصص",
    prepTime: "وقت التحضير",
    cookTime: "وقت الطهي",
    min: "دقيقة",
    calories: "السعرات الحرارية",
    protein: "بروتين",
    carbs: "كربوهيدرات",
    fat: "دهون",
    startCooking: "بدء وضع الطهي التفاعلي",
    customIngredients: "تخصيص المكونات",
    fridgeTitle: "البحث الذكي بالثلاجة",
    fridgeSubtitle: "حدد المكونات المتوفرة لديك بالثلاجة لعرض الوصفات المناسبة",
    findRecipes: "ابحث عن وصفات",
    spinTitle: "عجلة الحظ التفاعلية",
    spinBtn: "أدر العجلة",
    spinFood: "عجلة الوجبات",
    spinIng: "عجلة المكونات",
    spinSubtitle: "محتار ماذا تطبخ اليوم؟ دع N.Food تختار لك!",
    socialTitle: "مجتمع طهاة N.Food",
    postBtn: "شارك وصفاتك الخاصة",
    postPlaceholder: "شارك صورة أو تعليقاً حول هذه الوجبة...",
    notifications: "الإشعارات",
    loginTitle: "تسجيل الدخول إلى N.Food",
    loginSubtitle: "عبر Google أو Line أو الجوال (OTP)",
    loginSuccess: "تم تسجيل الدخول بنجاح",
    phoneInput: "رقم الجوال",
    sendOtp: "أرسل كود التحقق",
    enterOtp: "أدخل كود التحقق (6 أرقام)",
    submit: "تأكيد",
    alternativeIngTitle: "البدائل المقترحة للمكون:",
    communityDraftTitle: "اقتراح وصفة لإضافتها لقاعدة البيانات العالمية",
    reviewTitle: "لوحة تحكم المشرف (مراجعة الوصفات)",
    approve: "موافقة",
    reject: "رفض",
    recipeName: "اسم الوصفة",
    stepsLabel: "خطوات التحضير",
    addStepBtn: "إضافة خطوة",
    addIngBtn: "إضافة مكون",
    ingredientsLabel: "المكونات والمقادير (جرام / مل)",
    languageLabel: "اختر اللغة",
    cookedBadge: "طبختها!",
    guestMode: "متابعة كزائر",
    adminBadge: "صلاحيات المشرف",
    voiceActive: "التحكم الصوتي نشط (قل 'التالي' أو 'السابق')"
  }
};

// ฐานข้อมูลวัตถุดิบตู้เย็นเริ่มต้น
const FRIDGE_PRESETS = [
  { id: "i-egg", name: "ไข่ไก่ (Egg)", icon: "🥚" },
  { id: "i-shrimp", name: "กุ้งสด (Shrimp)", icon: "🍤" },
  { id: "i-tofu", name: "เต้าหู้เหลือง (Tofu)", icon: "🧈" },
  { id: "i-chicken-thigh", name: "เนื้อไก่ (Chicken)", icon: "🍗" },
  { id: "i-spinach", name: "ผักปวยเล้ง (Spinach)", icon: "🥬" },
  { id: "i-mushroom-straw", name: "เห็ดฟาง (Mushroom)", icon: "🍄" },
  { id: "i-tomato", name: "มะเขือเทศ (Tomato)", icon: "🍅" },
  { id: "i-mango", name: "มะม่วงสุก (Mango)", icon: "🥭" },
  { id: "i-coconut-milk", name: "กะทิสด (Coconut)", icon: "🥥" }
];

export default function App() {
  const [theme, setTheme] = useState('light');
  
  const getPasswordStrength = (pass) => {
    if (!pass) return { label: 'ไม่มีข้อมูล', color: '#888', width: '0%' };
    if (pass.length < 6) return { label: 'อ่อนเกินไป (Weak)', color: '#ef4444', width: '30%' };
    const hasLetter = /[a-zA-Z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    if (pass.length >= 8 && hasLetter && hasNumber) return { label: 'แข็งแกร่ง (Strong)', color: '#8eac50', width: '100%' };
    return { label: 'ปานกลาง (Medium)', color: '#d4af37', width: '60%' };
  };
  const [language, setLanguage] = useState('th');
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem('nfood_active_tab') || 'home');
  const [showLangMenu, setShowLangMenu] = useState(false);

  // ฐานข้อมูล
  const [ingredientsDb, setIngredientsDb] = useState([]);
  const [recipesDb, setRecipesDb] = useState([]);
  
  // สถานะฟิลเตอร์การค้นหา
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [selectedDiet, setSelectedDiet] = useState('All');
  const [recipeType, setRecipeType] = useState('all'); // all, savory, sweet

  // สถานะล็อกอินและสมาชิก
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('nfood_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [showLoginModal, setShowLoginModal] = useState(() => {
    const saved = localStorage.getItem('nfood_user');
    return !saved;
  });
  
  // แท็บสำหรับล็อกอิน/สมัครสมาชิก
  const [isSignUp, setIsSignUp] = useState(false); 
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [phone, setPhone] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpError, setOtpError] = useState('');

  // ระบบลืมรหัสผ่านและสเปกสมัครสมาชิกเพิ่มเติม
  const [forgotStep, setForgotStep] = useState(0); 
  const [forgotInput, setForgotInput] = useState('');
  const [forgotOtp, setForgotOtp] = useState('');
  const [forgotNewPass, setForgotNewPass] = useState('');
  const [forgotConfirmPass, setForgotConfirmPass] = useState('');
  const [forgotCountdown, setForgotCountdown] = useState(60);
  const [regFirstName, setRegFirstName] = useState('');
  const [regLastName, setRegLastName] = useState('');
  const [regAge, setRegAge] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);

  // บันทึกสถานะหน้าต่างและบัญชีลงเครื่องแบบถาวร
  useEffect(() => {
    localStorage.setItem('nfood_active_tab', activeTab);
  }, [activeTab]);

  useEffect(() => {
    const existing = localStorage.getItem('nfood_accounts');
    if (!existing) {
      const defaultAccounts = [
        { emailOrPhone: 'admin@nfood.com', password: '123456', name: 'คุณศิริชัย เลิศล้ำ', isAdmin: true }
      ];
      localStorage.setItem('nfood_accounts', JSON.stringify(defaultAccounts));
    }
  }, []);

  // หน้าดีเทลสูตรอาหาร
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [servings, setServings] = useState(4);
  const [customIngredients, setCustomIngredients] = useState({}); // { ingId: { active, amount } }
  
  // โหมดจับเวลาเข้าครัว
  const [cookingStep, setCookingStep] = useState(null); // ตัวชี้ index ขั้นตอน
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [voiceActive, setVoiceActive] = useState(false);

  // ระบบค้นหาตู้เย็น
  const [fridgeSelected, setFridgeSelected] = useState([]);

  // ระบบวงล้อกิจกรรม
  const [wheelType, setWheelType] = useState('food'); // food, ingredient
  const [wheelResult, setWheelResult] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const canvasRef = useRef(null);
  const [spinCategory, setSpinCategory] = useState('All');
  const wheelImageCache = useRef({});

  // ระบบโซเชียลคอมมูนิตี้
  const [socialFeed, setSocialFeed] = useState([
    {
      id: "p1",
      author: "เชฟกระทะเหล็กมือสมัครเล่น",
      avatar: "🍳",
      image: "Image/social_community_feed_mockup.png",
      content: "ทำผัดไทยสูตรเด็ดวันนี้ ปรับสูตรเป็น คีโต โดยใช้เส้นบุก อร่อยจนต้องบอกต่อ! ได้ป้ายตราของกินแล้วคร๊าบบบ",
      likes: 42,
      comments: ["น่ากินมากครับ!", "ขอยืมสูตรหน่อยน้าา"],
      recipeLink: "h1",
      hasBadge: true
    },
    {
      id: "p2",
      author: "เบเกอรี่เลิฟเวอร์",
      avatar: "🍰",
      image: "Image/cuisines_explore_mockup.png",
      content: "ลองสุ่มข้าวเหนียวมะม่วงจากวงล้อสุ่มมาบ่ายนี้ มะม่วงหวานฉ่ำสุดพลัง เข้ากันดีมากกับกะทิข้นๆ",
      likes: 12,
      comments: ["กินด้วยคนคร่า", "ใช้มะม่วงยี่ห้อไหนคะ"],
      recipeLink: "h3",
      hasBadge: true
    }
  ]);
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [newCommentTexts, setNewCommentTexts] = useState({});
  const [notifications, setNotifications] = useState([
    { id: 1, text: "เชฟส้มจี๊ด ถูกใจสูตรอาหารที่คุณเสนอ", read: false },
    { id: 2, text: "มีผู้ใช้แสดงความเห็นบนโพสต์ข้าวเหนียวมะม่วงของคุณ", read: false }
  ]);

  // ระบบเสนอสูตรอาหารเข้าระบบ (UGC)
  const [newRecipeName, setNewRecipeName] = useState('');
  const [newRecipeType, setNewRecipeType] = useState('savory');
  const [newRecipeCuisine, setNewRecipeCuisine] = useState('Thai');
  const [newRecipeDescription, setNewRecipeDescription] = useState('');
  const [newRecipeIngredients, setNewRecipeIngredients] = useState([{ name: '', amount: 100, unit: 'g' }]);
  const [newRecipeSteps, setNewRecipeSteps] = useState([{ step: 1, text: '', duration: 0 }]);
  const [pendingRecipes, setPendingRecipes] = useState([]); // แดชบอร์ดตรวจสอบของแอดมิน

  // โหลดฐานข้อมูล 1,500 วัตถุดิบ และ 300 สูตร
  useEffect(() => {
    const ingDb = generateIngredientsDatabase();
    setIngredientsDb(ingDb);
    const recDb = generateFullRecipesDatabase(ingDb);
    setRecipesDb(recDb);
  }, []);

  // ระบบเสียงสั่งการจำลองสำหรับ Cooking Mode
  useEffect(() => {
    let voiceTimer;
    if (voiceActive && cookingStep !== null) {
      // จำลองการตรวจจับเสียงทุก 8 วินาที
      voiceTimer = setInterval(() => {
        const randAction = Math.random();
        if (randAction > 0.6) {
          handleNextStep();
        } else if (randAction < 0.2) {
          handlePrevStep();
        }
      }, 9000);
    }
    return () => clearInterval(voiceTimer);
  }, [voiceActive, cookingStep]);

  // ตัวนับเวลาถอยหลังในขั้นตอน
  useEffect(() => {
    let interval = null;
    if (timerActive && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && timerActive) {
      setTimerActive(false);
      alert("ขั้นตอนอาหารครบเวลาแล้ว! (Timer Finished)");
    }
    return () => clearInterval(interval);
  }, [timerActive, timerSeconds]);

  // ตัวนับเวลาสำหรับ OTP ลืมรหัสผ่าน 60 วินาที
  useEffect(() => {
    let timer = null;
    if (forgotStep === 2 && forgotCountdown > 0) {
      timer = setInterval(() => {
        setForgotCountdown(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [forgotStep, forgotCountdown]);

  // ระบบสับเปลี่ยนทิศทาง RTL ของภาษาอาหรับ
  const isRTL = language === 'ar';

  const t = TRANSLATIONS[language];

  // ระบบสมัครสมาชิกจำลองบันทึกลงในเครื่อง
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPassword || !regConfirmPassword || !regFirstName || !regLastName || !regAge) {
      setOtpError('กรุณากรอกข้อมูลสมัครสมาชิกให้ครบถ้วน');
      return;
    }
    if (regPassword !== regConfirmPassword) {
      setOtpError('รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน');
      return;
    }

    const accounts = JSON.parse(localStorage.getItem('nfood_accounts') || '[]');
    const exists = accounts.find(acc => acc.emailOrPhone.toLowerCase() === regEmail.toLowerCase());
    if (exists) {
      setOtpError('อีเมลหรือเบอร์โทรศัพท์นี้เคยลงทะเบียนไว้แล้ว');
      return;
    }

    const newAccount = { 
      emailOrPhone: regEmail, 
      password: regPassword, 
      name: regName, 
      firstName: regFirstName,
      lastName: regLastName,
      age: parseInt(regAge) || 20,
      isAdmin: false 
    };
    accounts.push(newAccount);
    localStorage.setItem('nfood_accounts', JSON.stringify(accounts));

    if (rememberPassword) {
      localStorage.setItem('nfood_remembered_email', regEmail);
      localStorage.setItem('nfood_remembered_pass', regPassword);
    }

    alert(`สมัครสมาชิกสำเร็จแล้ว! ยินดีต้อนรับคุณ ${regName}. กรุณาลงชื่อเข้าใช้งานด้วยบัญชีนี้`);
    setOtpError('');
    setIsSignUp(false); // สลับกลับหน้าล็อกอิน
    setLoginEmail(regEmail);
    setLoginPassword(regPassword);
  };

  // ระบบเข้าสู่ระบบตรวจสอบตามประวัติบัญชีใน localStorage
  const handleCustomSignInSubmit = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      setOtpError('กรุณากรอกอีเมลและรหัสผ่านเพื่อเข้าใช้งาน');
      return;
    }

    const accounts = JSON.parse(localStorage.getItem('nfood_accounts') || '[]');
    const match = accounts.find(acc => acc.emailOrPhone.toLowerCase() === loginEmail.toLowerCase() && acc.password === loginPassword);
    if (match) {
      const userInfo = { name: match.name, provider: 'Custom', isAdmin: !!match.isAdmin };
      setUser(userInfo);
      localStorage.setItem('nfood_user', JSON.stringify(userInfo));
      setShowLoginModal(false);
      setOtpError('');
      setLoginEmail('');
      setLoginPassword('');
      confetti({ particleCount: 80, spread: 60 });
    } else {
      setOtpError('อีเมล รหัสผ่านไม่ถูกต้อง หรือโปรดยังไม่ได้สมัครบัญชี');
    }
  };

  // ยื่นคำขอลืมรหัสผ่าน ขั้นตอนที่ 1 (กรอกอีเมล/เบอร์โทรศัพท์)
  const handleForgot1Submit = (e) => {
    e.preventDefault();
    if (!forgotInput) {
      setOtpError('กรุณากรอกอีเมลหรือเบอร์โทรศัพท์เพื่อตรวจสอบ');
      return;
    }
    
    const accounts = JSON.parse(localStorage.getItem('nfood_accounts') || '[]');
    const exists = accounts.find(acc => acc.emailOrPhone.toLowerCase() === forgotInput.toLowerCase());
    if (!exists && forgotInput !== 'admin@nfood.com') {
      setOtpError('ไม่พบบัญชีนี้ในฐานข้อมูลระบบ');
      return;
    }

    setForgotStep(2);
    setForgotCountdown(60);
    setOtpError('');
    alert(`ระบบจำลองได้ส่งรหัส OTP 6 หลักไปยัง ${forgotInput} เรียบร้อยแล้ว (รหัสทดสอบคือ 123456)`);
  };

  // ยืนยันรหัส OTP ขั้นตอนที่ 2
  const handleForgot2Submit = (e) => {
    e.preventDefault();
    if (forgotOtp !== '123456') {
      setOtpError('รหัส OTP ไม่ถูกต้อง กรุณากรอกรหัส 123456 สำหรับการทดสอบ');
      return;
    }
    setForgotStep(3);
    setOtpError('');
  };

  // ตั้งรหัสผ่านใหม่ ขั้นตอนที่ 3
  const handleForgot3Submit = (e) => {
    e.preventDefault();
    if (!forgotNewPass || !forgotConfirmPass) {
      setOtpError('กรุณากรอกรหัสผ่านใหม่ให้ครบถ้วน');
      return;
    }
    if (forgotNewPass !== forgotConfirmPass) {
      setOtpError('รหัสผ่านใหม่และการยืนยันรหัสผ่านไม่ตรงกัน');
      return;
    }
    if (forgotNewPass.length < 6) {
      setOtpError('รหัสผ่านใหม่ต้องมีความยาวอย่างน้อย 6 ตัวอักษร');
      return;
    }

    const accounts = JSON.parse(localStorage.getItem('nfood_accounts') || '[]');
    let updated = false;
    const newAccounts = accounts.map(acc => {
      if (acc.emailOrPhone.toLowerCase() === forgotInput.toLowerCase()) {
        updated = true;
        return { ...acc, password: forgotNewPass };
      }
      return acc;
    });

    if (updated) {
      localStorage.setItem('nfood_accounts', JSON.stringify(newAccounts));
    } else if (forgotInput === 'admin@nfood.com') {
      const adminAcc = { emailOrPhone: 'admin@nfood.com', password: forgotNewPass, name: 'คุณศิริชัย เลิศล้ำ', isAdmin: true };
      accounts.push(adminAcc);
      localStorage.setItem('nfood_accounts', JSON.stringify(accounts));
    }

    alert('รีเซ็ตรหัสผ่านใหม่สำเร็จแล้ว! กรุณาเข้าสู่ระบบด้วยรหัสผ่านใหม่ของคุณ');
    setForgotStep(0);
    setIsSignUp(false);
    setLoginEmail(forgotInput);
    setLoginPassword(forgotNewPass);
    setForgotInput('');
    setForgotOtp('');
    setForgotNewPass('');
    setForgotConfirmPass('');
    setOtpError('');
  };

  // จำลองเข้าสู่ระบบ Google / Line
  const handleSocialLogin = (provider) => {
    const name = provider === 'Google' ? 'คุณศิริชัย เลิศล้ำ' : (provider === 'Facebook' ? 'Chef Facebook-N.Food' : 'Chef Line-N.Food');
    const isAdmin = provider === 'Google'; // ให้เข้าแบบแอดมินเพื่อแสดงหน้าตรวจสอบสูตร
    const userInfo = { name, provider, isAdmin };
    setUser(userInfo);
    localStorage.setItem('nfood_user', JSON.stringify(userInfo));
    setShowLoginModal(false);
    confetti({ particleCount: 80, spread: 60 });
  };

  // จำลองการรับและกรอกรหัส OTP
  const handleRequestOtp = (e) => {
    e.preventDefault();
    if (!phone || phone.length < 9) {
      setOtpError('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง');
      return;
    }
    setOtpSent(true);
    setOtpError('');
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otpCode === '123456' || otpCode.length === 6) {
      const userInfo = { name: `User (+66) ${phone.slice(-4)}`, provider: 'OTP', isAdmin: false };
      setUser(userInfo);
      localStorage.setItem('nfood_user', JSON.stringify(userInfo));
      setShowLoginModal(false);
      setPhone('');
      setOtpCode('');
      setOtpSent(false);
      confetti({ particleCount: 80, spread: 60 });
    } else {
      setOtpError('รหัส OTP ไม่ถูกต้อง ลองป้อน 123456');
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('nfood_user');
    setShowLoginModal(true);
  };

  // กรองเมนูอาหารตามความต้องการ
  const filteredRecipes = recipesDb.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some(ing => ing.name.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCuisine = selectedCuisine === 'All' || recipe.cuisine === selectedCuisine;
    const matchesDiet = selectedDiet === 'All' || recipe.diet.includes(selectedDiet);
    const matchesType = recipeType === 'all' || recipe.type === recipeType;
    
    return matchesSearch && matchesCuisine && matchesDiet && matchesType;
  });

  // การคลิกสูตรอาหารเข้าสู่หน้ารายละเอียด
  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setServings(4);
    
    // ตั้งวัตถุดิบแก้ไขเริ่มต้นจากสูตร
    const defaultEdits = {};
    recipe.ingredients.forEach(ing => {
      defaultEdits[ing.id] = { active: true, amount: ing.amount };
    });
    setCustomIngredients(defaultEdits);
    setActiveTab('recipe-detail');
  };

  // ปรับจานเสิร์ฟแบบ Real-time
  const handleServingChange = (val) => {
    const parsed = parseInt(val);
    if (isNaN(parsed) || parsed < 1) return;
    if (parsed > 1000000) {
      setServings(1000000);
      return;
    }
    setServings(parsed);
  };

  // การคำนวณโภชนาการแบบ Real-time สอดคล้องกับการเอาวัตถุดิบเข้า/ออก และเพิ่มขนาดจานเสิร์ฟ
  let calculatedCalories = 0;
  let calculatedProtein = 0;
  let calculatedCarbs = 0;
  let calculatedFat = 0;

  if (selectedRecipe) {
    selectedRecipe.ingredients.forEach(ing => {
      const editInfo = customIngredients[ing.id];
      if (editInfo && editInfo.active) {
        // อัตราการคูณสูตรคือ servings / 4 (เพราะวัตถุดิบเดิมจัดไว้ 4 เสิร์ฟ)
        const scaleMultiplier = servings / 4;
        const adjustedAmount = editInfo.amount * scaleMultiplier;
        
        calculatedCalories += adjustedAmount * ing.caloriesPerGram;
        calculatedProtein += adjustedAmount * ing.protein;
        calculatedCarbs += adjustedAmount * ing.carbs;
        calculatedFat += adjustedAmount * ing.fat;
      }
    });
  }

  // ตัวช่วยจัดรูปแบบหน่วยการชั่ง
  const formatAmount = (baseAmount) => {
    const scale = servings / 4;
    const finalAmount = baseAmount * scale;
    if (finalAmount >= 1000) {
      return `${(finalAmount / 1000).toFixed(2)} kg`;
    }
    return `${Math.round(finalAmount)} g`;
  };

  // การแก้ไขวัตถุดิบแบบโต้ตอบ
  const toggleIngredientActive = (id) => {
    setCustomIngredients(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        active: !prev[id].active
      }
    }));
  };

  const handleIngredientAmountChange = (id, val) => {
    const num = parseFloat(val);
    if (isNaN(num) || num < 0) return;
    setCustomIngredients(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        amount: num
      }
    }));
  };

  // โหมดเข้าครัวทีละขั้นตอน
  const startCookingMode = () => {
    setCookingStep(0);
    const duration = selectedRecipe.steps[0].duration;
    setTimerSeconds(duration);
    setTimerActive(false);
  };

  const handleNextStep = () => {
    if (cookingStep < selectedRecipe.steps.length - 1) {
      const nextIdx = cookingStep + 1;
      setCookingStep(nextIdx);
      setTimerSeconds(selectedRecipe.steps[nextIdx].duration);
      setTimerActive(false);
    } else {
      setCookingStep(null);
      confetti({ particleCount: 100, spread: 80 });
      alert("ยินดีด้วย! คุณทำอาหารเสร็จสมบูรณ์เรียบร้อยแล้ว!");
    }
  };

  const handlePrevStep = () => {
    if (cookingStep > 0) {
      const prevIdx = cookingStep - 1;
      setCookingStep(prevIdx);
      setTimerSeconds(selectedRecipe.steps[prevIdx].duration);
      setTimerActive(false);
    }
  };

  // ฟังก์ชันแปลงวิเป็นเวลาอ่านง่าย
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // ค้นหาตู้เย็น
  const toggleFridgeSelection = (id) => {
    setFridgeSelected(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // ค้นหาเมนูอาหารที่สอดคล้องกับตู้เย็นมากสุด
  const getFridgeRecipeMatches = () => {
    if (fridgeSelected.length === 0) return [];
    
    // คัดกรองสูตรอาหารที่มีวัตถุดิบร่วมกันและแสดงคะแนนการทับซ้อน
    return recipesDb.map(recipe => {
      const matchCount = recipe.ingredients.filter(ing => fridgeSelected.includes(ing.id)).length;
      const totalIngs = recipe.ingredients.length;
      const matchPercent = Math.round((matchCount / totalIngs) * 100);
      return { recipe, matchCount, matchPercent };
    })
    .filter(item => item.matchCount > 0)
    .sort((a, b) => b.matchPercent - a.matchPercent);
  };

  // ระบบกิจกรรมวงล้อหมุน (Canvas Drawing & Animation)
  useEffect(() => {
    if (activeTab === 'wheel' && canvasRef.current) {
      drawWheel();
    }
  }, [activeTab, wheelType, spinCategory]);

  // พรีโหลดรูปภาพสำหรับวาดบนวงล้อสุ่มอาหาร
  useEffect(() => {
    recipesDb.forEach(r => {
      if (r.image && !wheelImageCache.current[r.image]) {
        const img = new Image();
        img.src = r.image;
        wheelImageCache.current[r.image] = img;
        img.onload = () => {
          if (activeTab === 'wheel') {
            drawWheel();
          }
        };
      }
    });
  }, [recipesDb, activeTab]);

  const drawWheel = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const sections = getWheelItems();
    
    ctx.clearRect(0, 0, 460, 460);
    const radius = 210;
    const center = 230;
    const arc = Math.PI * 2 / sections.length;

    sections.forEach((item, i) => {
      ctx.beginPath();
      ctx.arc(center, center, radius, i * arc, (i + 1) * arc);
      ctx.lineTo(center, center);
      ctx.fillStyle = i % 2 === 0 ? '#d4af37' : (theme === 'light' ? '#ffffff' : '#1a1c1e');
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
      ctx.stroke();

      // เขียนตัวหนังสือลงในแถบวงล้อ
      ctx.save();
      ctx.fillStyle = i % 2 === 0 ? (theme === 'light' ? '#ffffff' : '#121415') : (theme === 'light' ? '#1c1a17' : '#f5f2eb');
      ctx.translate(center, center);
      ctx.rotate(i * arc + arc / 2);
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'right';
      const displayName = item.name.length > 15 ? item.name.slice(0, 13) + '..' : item.name;
      ctx.fillText(displayName, radius - 45, 5);

      // วาดรูปภาพประกอบเมนูบนวงล้อ (เป็นวงกลมย่อเล็กข้างๆ ชื่อ)
      if (item.image) {
        const cachedImg = wheelImageCache.current[item.image];
        if (cachedImg && cachedImg.complete) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(radius - 22, 0, 14, 0, Math.PI * 2);
          ctx.clip();
          ctx.drawImage(cachedImg, radius - 36, -14, 28, 28);
          ctx.restore();
        } else {
          // โหลดสดและวาด
          const img = new Image();
          img.src = item.image;
          img.onload = () => {
            ctx.save();
            ctx.beginPath();
            ctx.arc(radius - 22, 0, 14, 0, Math.PI * 2);
            ctx.clip();
            ctx.drawImage(img, radius - 36, -14, 28, 28);
            ctx.restore();
          };
        }
      }
      ctx.restore();
    });
  };

  const getWheelItems = () => {
    if (wheelType === 'food') {
      const source = recipesDb.filter(r => spinCategory === 'All' || r.cuisine === spinCategory);
      if (source.length < 2) {
        return [
          { name: "ผัดไทยกุ้งสด", image: "Image/pad_thai.png" },
          { name: "ข้าวเหนียวมะม่วง", image: "Image/mango_sticky_rice.png" },
          { name: "ราเมนซุปกระดูกหมู", image: "Image/ramen.png" },
          { name: "พิซซ่ามาเกริต้า", image: "Image/pizza_margherita.png" },
          { name: "ต้มยำกุ้ง", image: "Image/tom_yum.png" },
          { name: "ทีรามิสุ", image: "Image/tiramisu.png" },
          { name: "สปาเก็ตตี้คาร์โบนาร่า", image: "Image/carbonara.png" },
          { name: "ไดฟูกุสตรอว์เบอร์รี", image: "Image/daifuku.png" }
        ];
      }
      return source.slice(0, 12).map(r => ({
        name: r.name.split(' (')[0],
        image: r.image
      }));
    } else {
      // สุ่มชื่อวัตถุดิบ 8 รายการ
      const defaultImgs = [
        "https://cdn-icons-png.flaticon.com/512/1041/1041373.png", // chicken
        "https://cdn-icons-png.flaticon.com/512/1041/1041375.png", // pork
        "https://cdn-icons-png.flaticon.com/512/1041/1041377.png", // beef
        "https://cdn-icons-png.flaticon.com/512/1041/1041379.png", // fish
        "https://cdn-icons-png.flaticon.com/512/2909/2909772.png", // egg
        "https://cdn-icons-png.flaticon.com/512/1041/1041381.png", // onion
        "https://cdn-icons-png.flaticon.com/512/1041/1041383.png", // garlic
        "https://cdn-icons-png.flaticon.com/512/1041/1041385.png"  // chili
      ];
      return ingredientsDb.slice(0, 8).map((i, idx) => ({
        name: i.name.split(' (')[0],
        image: defaultImgs[idx % defaultImgs.length]
      }));
    }
  };

  const spinTheWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setWheelResult(null);
    
    const items = getWheelItems();
    const randDegrees = 3600 + Math.floor(Math.random() * 360); // หมุน 10 รอบขึ้นไป
    const itemIndex = Math.floor(((360 - (randDegrees % 360)) / (360 / items.length)));
    
    // อนิเมชันการหมุนโดยค่อยๆ ชะลอความเร็ว
    const canvas = canvasRef.current;
    canvas.style.transition = 'transform 5s cubic-bezier(0.15, 0.9, 0.15, 1)';
    canvas.style.transform = `rotate(${randDegrees}deg)`;
    
    setTimeout(() => {
      setIsSpinning(false);
      const landedItem = items[itemIndex];
      setWheelResult(landedItem.name);
      
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      // ล้างสไตล์ rotation เพื่อให้กลับมาหมุนใหม่ได้ในครั้งหน้าแบบต่อเนื่อง
      canvas.style.transition = 'none';
      canvas.style.transform = `rotate(${randDegrees % 360}deg)`;
    }, 5000);
  };

  // โพสต์และถูกใจของชุมชน
  const handleLikePost = (postId) => {
    const isLiked = likedPosts.has(postId);
    const newLikes = new Set(likedPosts);
    if (isLiked) {
      newLikes.delete(postId);
      setSocialFeed(prev => prev.map(p => p.id === postId ? { ...p, likes: p.likes - 1 } : p));
    } else {
      newLikes.add(postId);
      setSocialFeed(prev => prev.map(p => p.id === postId ? { ...p, likes: p.likes + 1 } : p));
      
      // เพิ่มการแจ้งเตือนจำลอง
      setNotifications(prev => [
        { id: Date.now(), text: `มีคนถูกใจโพสต์โซเชียลของคุณแล้ว!`, read: false },
        ...prev
      ]);
    }
    setLikedPosts(newLikes);
  };

  const handleAddComment = (postId) => {
    const text = newCommentTexts[postId];
    if (!text || !text.trim()) return;

    setSocialFeed(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, `${user ? user.name : 'Guest'}: ${text}`]
        };
      }
      return post;
    }));

    setNewCommentTexts(prev => ({ ...prev, [postId]: '' }));
    
    // แจ้งเตือนคนเขียน
    setNotifications(prev => [
      { id: Date.now(), text: `มีความคิดเห็นใหม่: "${text.slice(0,18)}..."`, read: false },
      ...prev
    ]);
  };

  // บันทึกเสนอสูตรอาหารเข้าระบบ (UGC)
  const handleAddSubmitIngredient = () => {
    setNewRecipeIngredients([...newRecipeIngredients, { name: '', amount: 100, unit: 'g' }]);
  };

  const handleAddSubmitStep = () => {
    setNewRecipeSteps([...newRecipeSteps, { step: newRecipeSteps.length + 1, text: '', duration: 0 }]);
  };

  const handleRecipeSubmitForm = (e) => {
    e.preventDefault();
    if (!newRecipeName || !newRecipeDescription) {
      alert("กรุณากรอกข้อมูลสูตรอาหารให้ครบถ้วน");
      return;
    }
    
    const submittedData = {
      id: `pending-${Date.now()}`,
      name: newRecipeName,
      type: newRecipeType,
      cuisine: newRecipeCuisine,
      description: newRecipeDescription,
      ingredients: newRecipeIngredients.map((ing, idx) => ({
        id: `ing-new-${idx}`,
        name: ing.name,
        amount: ing.amount,
        unit: ing.unit,
        caloriesPerGram: 1.5,
        protein: 0.1,
        carbs: 0.2,
        fat: 0.05
      })),
      steps: newRecipeSteps,
      diet: ["Vegetarian"],
      image: "Image/auth_login_mockup.png",
      author: user ? user.name : "Guest Chef"
    };

    setPendingRecipes([submittedData, ...pendingRecipes]);
    alert("ส่งสูตรอาหารเสนอเข้าสู่ระบบของเว็บไซต์สำเร็จแล้ว! รอแอดมินพิจารณาตรวจสอบสิทธิ์");
    
    // รีเซ็ตฟอร์ม
    setNewRecipeName('');
    setNewRecipeDescription('');
    setNewRecipeIngredients([{ name: '', amount: 100, unit: 'g' }]);
    setNewRecipeSteps([{ step: 1, text: '', duration: 0 }]);
    setActiveTab('home');
  };

  // แอดมินอนุมัติสูตรอาหาร
  const handleApproveRecipe = (pendingId) => {
    const item = pendingRecipes.find(r => r.id === pendingId);
    if (!item) return;

    // ย้ายสูตรอาหารเข้าสู่คลังฐานข้อมูลหลัก
    const finalRecipe = {
      ...item,
      id: `h-approved-${Date.now()}`,
      caloriesPerServing: Math.round(item.ingredients.reduce((acc, ing) => acc + (ing.amount * ing.caloriesPerGram), 0)),
      macros: { protein: 15, carbs: 40, fat: 12 }
    };

    setRecipesDb([finalRecipe, ...recipesDb]);
    setPendingRecipes(prev => prev.filter(r => r.id !== pendingId));
    
    // โพสต์ข่าวลงหน้าโซเชียลฟีดโดยอัตโนมัติ
    setSocialFeed([
      {
        id: `social-post-auto-${Date.now()}`,
        author: item.author,
        avatar: "🏅",
        image: "Image/recipe_cooking_mode_mockup.png",
        content: `สูตรอาหาร "${item.name}" ของฉันได้รับการอนุมัติเข้าสู่ระบบเว็บไซต์เรียบร้อยแล้ว ลองเข้ามาเล่นปรับแต่งสเกลจานเสิร์ฟกันได้นะ!`,
        likes: 5,
        comments: ["สุดยอดไปเลยครับ!", "ว้าวว ยินดีด้วยค่ะ"],
        recipeLink: finalRecipe.id,
        hasBadge: true
      },
      ...socialFeed
    ]);

    alert("อนุมัติสูตรอาหารและอัปเดตเข้าระบบฐานข้อมูลเรียบร้อยแล้ว!");
  };

  const handleRejectRecipe = (pendingId) => {
    setPendingRecipes(prev => prev.filter(r => r.id !== pendingId));
    alert("ปฏิเสธการเผยแพร่สูตรเรียบร้อยแล้ว");
  };

  return (
    <div className={`app-container ${theme === 'dark' ? 'dark-mode' : ''} ${isRTL ? 'rtl-layout' : ''}`}>
      
      {/* 1. ล็อกอินโมดอลบังคับ (Authentication Screen) */}
      {showLoginModal && (
        <div className="cooking-modal" style={{ display: 'flex', zIndex: 1001, background: 'var(--bg-primary)', justifyContent: 'center', alignItems: 'center' }}>
          <div className="glass-card" style={{ maxWidth: '440px', width: '100%', padding: '30px 40px', textAlign: 'center', border: '1px solid var(--border-card)', maxHeight: '95vh', overflowY: 'auto' }}>
            <img src="/New-Food/nfood_lux_logo.png" alt="N.Food Logo" style={{ margin: '0 auto 16px auto', width: '70px', height: '70px', borderRadius: '16px', objectFit: 'cover', display: 'block' }} />
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '4px', color: 'var(--color-text-main)' }}>{t.loginTitle}</h2>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px', fontSize: '0.85rem' }}>{t.loginSubtitle}</p>
            
            {/* แท็บสลับหน้าจอ */}
            {forgotStep === 0 && (
              <div style={{ display: 'flex', borderBottom: '1px solid var(--border-card)', marginBottom: 20 }}>
                <button 
                  onClick={() => { setIsSignUp(false); setOtpError(''); }} 
                  style={{ flex: 1, border: 'none', background: 'none', padding: '10px 0', fontSize: '0.9rem', cursor: 'pointer', borderBottom: !isSignUp ? '2px solid var(--color-accent)' : 'none', color: !isSignUp ? 'var(--color-text-main)' : 'var(--color-text-muted)', fontWeight: 600 }}
                >
                  เข้าสู่ระบบ
                </button>
                <button 
                  onClick={() => { setIsSignUp(true); setOtpError(''); }} 
                  style={{ flex: 1, border: 'none', background: 'none', padding: '10px 0', fontSize: '0.9rem', cursor: 'pointer', borderBottom: isSignUp ? '2px solid var(--color-accent)' : 'none', color: isSignUp ? 'var(--color-text-main)' : 'var(--color-text-muted)', fontWeight: 600 }}
                >
                  สมัครสมาชิก
                </button>
              </div>
            )}

            {otpError && <div style={{ color: '#ef4444', background: 'rgba(239,68,68,0.1)', padding: 8, borderRadius: 8, fontSize: '0.8rem', marginBottom: 12 }}>{otpError}</div>}

            {forgotStep === 0 && !isSignUp && (
              /* หน้าเข้าสู่ระบบ (Sign In) */
              <div>
                <form onSubmit={handleCustomSignInSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
                  <div style={{ textAlign: 'left' }}>
                    <input 
                      type="text" 
                      placeholder="อีเมลหรือเบอร์โทรศัพท์ (เช่น admin@nfood.com)" 
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="form-input" 
                      style={{ width: '100%', height: '40px', fontSize: '0.85rem' }}
                      required
                    />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <input 
                      type="password" 
                      placeholder="รหัสผ่าน (เช่น 123456)" 
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="form-input" 
                      style={{ width: '100%', height: '40px', fontSize: '0.85rem' }}
                      required
                    />
                  </div>
                  <div style={{ textAlign: 'right', marginTop: -4, marginBottom: 8 }}>
                    <button type="button" onClick={() => { setForgotStep(1); setOtpError(''); }} style={{ background: 'none', border: 'none', color: 'var(--color-accent)', fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'underline', padding: 0 }}>
                      ลืมรหัสผ่าน? (Forgot Password?)
                    </button>
                  </div>
                  <button type="submit" className="control-btn" style={{ justifyContent: 'center', height: '40px', background: 'var(--color-accent)', color: 'white', border: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
                    ลงชื่อเข้าใช้งาน
                  </button>
                </form>

                <div style={{ display: 'flex', alignItems: 'center', margin: '15px 0', color: 'var(--color-text-muted)' }}>
                  <hr style={{ flex: 1, borderColor: 'rgba(255,255,255,0.08)' }} />
                  <span style={{ padding: '0 10px', fontSize: '0.75rem' }}>หรือเชื่อมต่อ SSO</span>
                  <hr style={{ flex: 1, borderColor: 'rgba(255,255,255,0.08)' }} />
                </div>

                {/* โซเชียลล็อกอินแบบ 3 ปุ่มเชื่อม Facebook */}
                <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
                  <button onClick={() => handleSocialLogin('Google')} className="control-btn" style={{ flex: 1, justifyContent: 'center', height: 38, backgroundColor: '#ffffff', color: '#111', fontWeight: 600, fontSize: '0.75rem', padding: '0 4px' }}>
                    Google
                  </button>
                  <button onClick={() => handleSocialLogin('Line')} className="control-btn" style={{ flex: 1, justifyContent: 'center', height: 38, backgroundColor: '#06c755', color: '#fff', border: 'none', fontWeight: 600, fontSize: '0.75rem', padding: '0 4px' }}>
                    LINE
                  </button>
                  <button onClick={() => handleSocialLogin('Facebook')} className="control-btn" style={{ flex: 1, justifyContent: 'center', height: 38, backgroundColor: '#1877f2', color: '#fff', border: 'none', fontWeight: 600, fontSize: '0.75rem', padding: '0 4px' }}>
                    Facebook
                  </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', margin: '15px 0', color: 'var(--color-text-muted)' }}>
                  <hr style={{ flex: 1, borderColor: 'rgba(255,255,255,0.08)' }} />
                  <span style={{ padding: '0 10px', fontSize: '0.75rem' }}>หรือด่วนด้วย OTP มือถือ</span>
                  <hr style={{ flex: 1, borderColor: 'rgba(255,255,255,0.08)' }} />
                </div>

                {/* OTP Login */}
                {!otpSent ? (
                  <form onSubmit={handleRequestOtp} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="เบอร์โทรศัพท์มือถือ (08X-XXX-XXXX)" 
                      className="form-input" 
                      style={{ width: '100%', height: '36px', fontSize: '0.8rem' }}
                    />
                    <button type="submit" className="control-btn" style={{ justifyContent: 'center', height: '36px', fontSize: '0.8rem' }}>
                      {t.sendOtp}
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleVerifyOtp} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <input 
                      type="text" 
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      maxLength={6}
                      placeholder="กรอก OTP 6 หลัก (123456)" 
                      className="form-input" 
                      style={{ width: '100%', height: '36px', textAlign: 'center', fontSize: '0.95rem', letterSpacing: 4 }}
                    />
                    <button type="submit" className="control-btn" style={{ justifyContent: 'center', height: '36px', background: 'var(--color-accent)', color: 'white', border: 'none', fontSize: '0.8rem' }}>
                      {t.submit}
                    </button>
                  </form>
                )}
              </div>
            )}

            {forgotStep === 0 && isSignUp && (
              /* หน้าสมัครสมาชิก (Sign Up) */
              <form onSubmit={handleSignUpSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input 
                    type="text" 
                    placeholder="ชื่อจริง (First Name)" 
                    value={regFirstName}
                    onChange={(e) => setRegFirstName(e.target.value)}
                    className="form-input" 
                    style={{ flex: 1, height: '40px', fontSize: '0.85rem' }}
                    required
                  />
                  <input 
                    type="text" 
                    placeholder="นามสกุล (Last Name)" 
                    value={regLastName}
                    onChange={(e) => setRegLastName(e.target.value)}
                    className="form-input" 
                    style={{ flex: 1, height: '40px', fontSize: '0.85rem' }}
                    required
                  />
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <input 
                    type="text" 
                    placeholder="ชื่อผู้ใช้งาน (Display Name)" 
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    className="form-input" 
                    style={{ flex: 2, height: '40px', fontSize: '0.85rem' }}
                    required
                  />
                  <input 
                    type="number" 
                    placeholder="อายุ (Age)" 
                    value={regAge}
                    onChange={(e) => setRegAge(e.target.value)}
                    className="form-input" 
                    style={{ flex: 1, height: '40px', fontSize: '0.85rem' }}
                    min="1"
                    max="120"
                    required
                  />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <input 
                    type="text" 
                    placeholder="อีเมล หรือ เบอร์โทรศัพท์" 
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    className="form-input" 
                    style={{ width: '100%', height: '40px', fontSize: '0.85rem' }}
                    required
                  />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <input 
                    type="password" 
                    placeholder="รหัสผ่านความปลอดภัย" 
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    className="form-input" 
                    style={{ width: '100%', height: '40px', fontSize: '0.85rem' }}
                    required
                  />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <input 
                    type="password" 
                    placeholder="ยืนยันรหัสผ่านอีกครั้ง" 
                    value={regConfirmPassword}
                    onChange={(e) => setRegConfirmPassword(e.target.value)}
                    className="form-input" 
                    style={{ width: '100%', height: '40px', fontSize: '0.85rem' }}
                    required
                  />
                </div>
                
                {/* Remember Password Checkbox */}
                <div style={{ textAlign: 'left', margin: '4px 0' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-text-muted)', fontSize: '0.8rem', cursor: 'pointer', userSelect: 'none' }}>
                    <input 
                      type="checkbox" 
                      checked={rememberPassword} 
                      onChange={(e) => setRememberPassword(e.target.checked)} 
                      style={{ width: '16px', height: '16px', accentColor: 'var(--color-accent)' }} 
                    />
                    Remember my Password
                  </label>
                </div>

                <button type="submit" className="control-btn" style={{ justifyContent: 'center', height: '44px', background: 'var(--color-accent)', color: 'white', border: 'none', fontSize: '0.9rem', fontWeight: 'bold', marginTop: 10 }}>
                  ลงทะเบียนสมาชิกใหม่
                </button>
              </form>
            )}

            {forgotStep === 1 && (
              /* ลืมรหัสผ่าน ขั้นตอนที่ 1 */
              <form onSubmit={handleForgot1Submit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: 8 }}>กู้คืนรหัสผ่าน (ขั้นตอนที่ 1)</h3>
                <div style={{ textAlign: 'left' }}>
                  <input 
                    type="text" 
                    placeholder="กรอกอีเมลหรือเบอร์โทรศัพท์ของคุณ" 
                    value={forgotInput}
                    onChange={(e) => setForgotInput(e.target.value)}
                    className="form-input" 
                    style={{ width: '100%', height: '40px', fontSize: '0.85rem' }}
                    required
                  />
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                  <button type="button" onClick={() => setForgotStep(0)} className="control-btn" style={{ flex: 1, justifyContent: 'center', height: '40px', background: 'rgba(0,0,0,0.05)', color: 'var(--color-text-main)', border: '1px solid var(--border-card)', fontSize: '0.85rem' }}>
                    ยกเลิก
                  </button>
                  <button type="submit" className="control-btn" style={{ flex: 1, justifyContent: 'center', height: '40px', background: 'var(--color-accent)', color: 'white', border: 'none', fontSize: '0.85rem', fontWeight: 600 }}>
                    ส่งรหัส OTP
                  </button>
                </div>
              </form>
            )}

            {forgotStep === 2 && (
              /* ลืมรหัสผ่าน ขั้นตอนที่ 2 */
              <form onSubmit={handleForgot2Submit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: 8 }}>ยืนยันรหัส OTP (ขั้นตอนที่ 2)</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>ส่งรหัสไปยัง {forgotInput} แล้ว</p>
                <div style={{ textAlign: 'left' }}>
                  <input 
                    type="text" 
                    placeholder="กรอกรหัส OTP 6 หลัก (123456)" 
                    value={forgotOtp}
                    onChange={(e) => setForgotOtp(e.target.value)}
                    maxLength={6}
                    className="form-input" 
                    style={{ width: '100%', height: '40px', textAlign: 'center', fontSize: '0.95rem', letterSpacing: 4 }}
                    required
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, margin: '8px 0' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>ส่งรหัสใหม่ใน:</span>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    border: '2px solid var(--color-accent)', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    fontSize: '0.75rem', 
                    fontWeight: 'bold', 
                    color: 'var(--color-accent)' 
                  }}>
                    {forgotCountdown}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button type="button" onClick={() => setForgotStep(1)} className="control-btn" style={{ flex: 1, justifyContent: 'center', height: '40px', background: 'rgba(0,0,0,0.05)', color: 'var(--color-text-main)', border: '1px solid var(--border-card)', fontSize: '0.85rem' }}>
                    ย้อนกลับ
                  </button>
                  <button type="submit" className="control-btn" style={{ flex: 1, justifyContent: 'center', height: '40px', background: 'var(--color-accent)', color: 'white', border: 'none', fontSize: '0.85rem', fontWeight: 600 }}>
                    ยืนยันรหัส OTP
                  </button>
                </div>
              </form>
            )}

            {forgotStep === 3 && (
              /* ลืมรหัสผ่าน ขั้นตอนที่ 3 */
              <form onSubmit={handleForgot3Submit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: 8 }}>ตั้งรหัสผ่านใหม่ (ขั้นตอนที่ 3)</h3>
                <div style={{ textAlign: 'left' }}>
                  <input 
                    type="password" 
                    placeholder="รหัสผ่านใหม่" 
                    value={forgotNewPass}
                    onChange={(e) => setForgotNewPass(e.target.value)}
                    className="form-input" 
                    style={{ width: '100%', height: '40px', fontSize: '0.85rem' }}
                    required
                  />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <input 
                    type="password" 
                    placeholder="ยืนยันรหัสผ่านใหม่" 
                    value={forgotConfirmPass}
                    onChange={(e) => setForgotConfirmPass(e.target.value)}
                    className="form-input" 
                    style={{ width: '100%', height: '40px', fontSize: '0.85rem' }}
                    required
                  />
                </div>
                
                {/* Password Strength Indicator */}
                {(() => {
                  const strength = getPasswordStrength(forgotNewPass);
                  return (
                    <div style={{ textAlign: 'left', margin: '4px 0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: 4 }}>
                        <span style={{ color: 'var(--color-text-muted)' }}>ระดับความปลอดภัย:</span>
                        <span style={{ color: strength.color, fontWeight: 'bold' }}>{strength.label}</span>
                      </div>
                      <div style={{ width: '100%', height: '6px', background: 'rgba(0,0,0,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: strength.width, height: '100%', background: strength.color, transition: 'width 0.3s ease' }}></div>
                      </div>
                    </div>
                  );
                })()}

                <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                  <button type="button" onClick={() => setForgotStep(0)} className="control-btn" style={{ flex: 1, justifyContent: 'center', height: '40px', background: 'rgba(0,0,0,0.05)', color: 'var(--color-text-main)', border: '1px solid var(--border-card)', fontSize: '0.85rem' }}>
                    ยกเลิก
                  </button>
                  <button type="submit" className="control-btn" style={{ flex: 1, justifyContent: 'center', height: '40px', background: 'var(--color-accent)', color: 'white', border: 'none', fontSize: '0.85rem', fontWeight: 600 }}>
                    ตั้งรหัสผ่านใหม่
                  </button>
                </div>
              </form>
            )}

            <button onClick={() => { setShowLoginModal(false); setForgotStep(0); setOtpError(''); }} style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', fontSize: '0.8rem', marginTop: 20, cursor: 'pointer', textDecoration: 'underline' }}>
              {t.guestMode}
            </button>
          </div>
        </div>
      )}

      {/* 2. เมนูด้านข้าง Sidebar (แสดงเฉพาะเดสก์ท็อป) */}
      <aside className="sidebar">
        <div className="logo-section" style={{ gap: '16px' }}>
          <img src="/New-Food/nfood_lux_logo.png" alt="N.Food Logo" style={{ width: '42px', height: '42px', borderRadius: '10px', objectFit: 'cover' }} />
          <div>
            <span className="logo-text">N.Food</span>
            <div style={{ fontSize: '0.65rem', color: 'var(--color-accent)', letterSpacing: 2 }}>NEW FOOD</div>
          </div>
        </div>

        <nav className="nav-links">
          <div className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => { setActiveTab('home'); setSelectedRecipe(null); }}>
            <Compass size={20} />
            <span>ค้นหาสูตรอาหาร</span>
          </div>
          <div className={`nav-item ${activeTab === 'fridge' ? 'active' : ''}`} onClick={() => { setActiveTab('fridge'); setSelectedRecipe(null); }}>
            <Scale size={20} />
            <span>ตู้เย็นอัจฉริยะ</span>
          </div>
          <div className={`nav-item ${activeTab === 'wheel' ? 'active' : ''}`} onClick={() => { setActiveTab('wheel'); setSelectedRecipe(null); }}>
            <Dices size={20} />
            <span>วงล้อสุ่มอาหาร</span>
          </div>
          <div className={`nav-item ${activeTab === 'social' ? 'active' : ''}`} onClick={() => { setActiveTab('social'); setSelectedRecipe(null); }}>
            <Users size={20} />
            <span>คอมมูนิตี้แชร์สูตร</span>
          </div>
          {user?.isAdmin && (
            <div className={`nav-item ${activeTab === 'admin' ? 'active' : ''}`} onClick={() => { setActiveTab('admin'); setSelectedRecipe(null); }} style={{ color: 'var(--color-warning)' }}>
              <ChefHat size={20} />
              <span>{t.reviewTitle} ({pendingRecipes.length})</span>
            </div>
          )}
        </nav>

        <div className="sidebar-footer">
          {user ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                  {user.name[0]}
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.name}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{user.isAdmin ? t.adminBadge : 'Member'}</div>
                </div>
              </div>
              <button onClick={handleLogout} className="control-btn" style={{ fontSize: '0.85rem', padding: '8px 12px', justifyContent: 'center' }}>
                <LogOut size={16} /> ออกจากระบบ
              </button>
            </div>
          ) : (
            <button onClick={() => setShowLoginModal(true)} className="control-btn" style={{ width: '100%', justifyContent: 'center' }}>
              เข้าสู่ระบบ
            </button>
          )}
        </div>
      </aside>

      {/* 3. แถบเมนูด้านล่าง Mobile Bottom Nav (แสดงเฉพาะมือถือ) */}
      <div className="bottom-nav">
        <div className={`bottom-nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => { setActiveTab('home'); setSelectedRecipe(null); }}>
          <Compass size={22} />
          <span>สำรวจ</span>
        </div>
        <div className={`bottom-nav-item ${activeTab === 'fridge' ? 'active' : ''}`} onClick={() => { setActiveTab('fridge'); setSelectedRecipe(null); }}>
          <Scale size={22} />
          <span>ตู้เย็น</span>
        </div>
        <div className={`bottom-nav-item ${activeTab === 'wheel' ? 'active' : ''}`} onClick={() => { setActiveTab('wheel'); setSelectedRecipe(null); }}>
          <Dices size={22} />
          <span>สุ่มอาหาร</span>
        </div>
        <div className={`bottom-nav-item ${activeTab === 'social' ? 'active' : ''}`} onClick={() => { setActiveTab('social'); setSelectedRecipe(null); }}>
          <Users size={22} />
          <span>ชุมชน</span>
        </div>
      </div>

      {/* 4. พื้นที่เนื้อหาหลัก (Main Content) */}
      <main className="main-content">
        <header className="main-header">
          <div className="header-title-section">
            <h1>{t.welcome}</h1>
            <p>{t.slogan}</p>
          </div>

          <div className="header-controls">
            {/* โหมดเปลี่ยนธีมมืด/สว่าง */}
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="control-btn" style={{ borderRadius: '50%', width: 42, height: 42, padding: 0, justifyContent: 'center' }}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* แจ้งเตือนแบบ Real-time Dropdown */}
            <div style={{ position: 'relative' }}>
              <button className="control-btn" style={{ borderRadius: '50%', width: 42, height: 42, padding: 0, justifyContent: 'center' }}>
                <Bell size={20} />
                {notifications.length > 0 && (
                  <span style={{ position: 'absolute', top: -2, right: -2, backgroundColor: '#ef4444', color: 'white', fontSize: '0.65rem', padding: '2px 5px', borderRadius: '50%', fontWeight: 'bold' }}>
                    {notifications.length}
                  </span>
                )}
              </button>
            </div>

            {/* ปุ่มเลือกภาษาอัจฉริยะ */}
            <div className="lang-dropdown">
              <button onClick={() => setShowLangMenu(!showLangMenu)} className="control-btn">
                <Globe size={18} />
                <span>{language.toUpperCase()}</span>
              </button>
              {showLangMenu && (
                <div className="lang-menu">
                  <div className={`lang-item ${language === 'th' ? 'selected' : ''}`} onClick={() => { setLanguage('th'); setShowLangMenu(false); }}>🇹🇭 ไทย (Thai)</div>
                  <div className={`lang-item ${language === 'en' ? 'selected' : ''}`} onClick={() => { setLanguage('en'); setShowLangMenu(false); }}>🇺🇸 English</div>
                  <div className={`lang-item ${language === 'jp' ? 'selected' : ''}`} onClick={() => { setLanguage('jp'); setShowLangMenu(false); }}>🇯🇵 日本語 (Japanese)</div>
                  <div className={`lang-item ${language === 'ar' ? 'selected' : ''}`} onClick={() => { setLanguage('ar'); setShowLangMenu(false); }}>🇸🇦 العربية (Arabic - RTL)</div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* แท็บหน้าระบบ: 1. หน้าแรกสำรวจสูตรอาหาร */}
        {activeTab === 'home' && (
          <div>
            <div className="home-featured">
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 16 }}>เมนูอาหารยอดนิยมแนะนำ</h2>
              <div className="featured-carousel">
                {recipesDb.slice(0, 4).map(recipe => (
                  <div key={recipe.id} className="featured-card" onClick={() => handleSelectRecipe(recipe)}>
                    <img src={recipe.image} alt={recipe.name} />
                    <div className="featured-overlay">
                      <span className="featured-tag">{recipe.cuisine}</span>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{recipe.name}</h3>
                      <p style={{ fontSize: '0.8rem', color: '#e5e7eb' }}>{recipe.caloriesPerServing} kcal | {recipe.prepTime + recipe.cookTime} {t.min}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* แผงฟิลเตอร์กรองข้อมูลสูตร 300 เมนู */}
            <div className="glass-card" style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
                <div style={{ position: 'relative', flex: 1 }}>
                  <Search style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} size={18} />
                  <input 
                    type="text" 
                    placeholder={t.searchPlaceholder} 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="form-input" 
                    style={{ width: '100%', paddingLeft: 48, height: 48, borderRadius: 24 }}
                  />
                </div>
              </div>

              <div className="filters-container">
                <div className="cuisine-filters">
                  {["All", "Thai", "Japanese", "Italian", "French", "Mexican", "Indian"].map(cuisine => (
                    <button 
                      key={cuisine}
                      onClick={() => setSelectedCuisine(cuisine)}
                      className={`filter-chip ${selectedCuisine === cuisine ? 'active' : ''}`}
                    >
                      {cuisine === 'All' ? t.all : cuisine}
                    </button>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{t.diet}:</span>
                  <div className="diet-filters">
                    {["All", "Vegan", "Vegetarian", "Gluten-Free", "Halal"].map(diet => (
                      <button 
                        key={diet}
                        onClick={() => setSelectedDiet(diet)}
                        className={`filter-chip ${selectedDiet === diet ? 'active' : ''}`}
                        style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                      >
                        {diet === 'All' ? t.all : diet}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, borderTop: '1px solid var(--border-card)', paddingTop: 16 }}>
                <button onClick={() => setRecipeType('all')} className={`filter-chip ${recipeType === 'all' ? 'active' : ''}`}>{t.all}</button>
                <button onClick={() => setRecipeType('savory')} className={`filter-chip ${recipeType === 'savory' ? 'active' : ''}`}>{t.savory}</button>
                <button onClick={() => setRecipeType('sweet')} className={`filter-chip ${recipeType === 'sweet' ? 'active' : ''}`}>{t.sweet}</button>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  พบรายการอาหารทั้งหมด {filteredRecipes.length} เมนู
                </div>
              </div>
            </div>

            {/* ผลลัพธ์สูตรอาหารหลัก */}
            {selectedCuisine === 'All' ? (
              <div>
                {["Thai", "Japanese", "Italian", "French", "Mexican", "Indian"].map(cuisine => {
                  const cuisineRecipes = filteredRecipes.filter(r => r.cuisine === cuisine);
                  if (cuisineRecipes.length === 0) return null;
                  return (
                    <div key={cuisine} style={{ marginBottom: 40 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, margin: 0 }}>
                          <span>{cuisine === 'Thai' ? '🇹🇭 อาหารไทย' : cuisine === 'Japanese' ? '🇯🇵 อาหารญี่ปุ่น' : cuisine === 'Italian' ? '🇮🇹 อาหารอิตาเลียน' : cuisine === 'French' ? '🇫🇷 อาหารฝรั่งเศส' : cuisine === 'Mexican' ? '🇲🇽 อาหารเม็กซิกัน' : cuisine === 'Indian' ? '🇮🇳 อาหารอินเดีย' : cuisine}</span>
                        </h2>
                        <button onClick={() => setSelectedCuisine(cuisine)} style={{ background: 'none', border: 'none', color: 'var(--color-accent)', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold' }}>
                          ดูทั้งหมด ›
                        </button>
                      </div>
                      <div className="horizontal-scroll-row">
                        {cuisineRecipes.map(recipe => (
                          <div key={recipe.id} className="glass-card horizontal-recipe-card" onClick={() => handleSelectRecipe(recipe)}>
                            <div className="recipe-card-img">
                              <img src={recipe.image} alt={recipe.name} />
                              <span className="recipe-cuisine-tag">{recipe.cuisine}</span>
                            </div>
                            <div className="recipe-card-content">
                              <h3 className="recipe-card-title">{recipe.name}</h3>
                              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: 12, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                {recipe.description}
                              </p>
                              <div className="recipe-stats">
                                <div className="recipe-stat-item">
                                  <Timer size={14} />
                                  <span>{recipe.prepTime + recipe.cookTime} {t.min}</span>
                                </div>
                                <div className="recipe-stat-item">
                                  <ChefHat size={14} />
                                  <span>วัตถุดิบ {recipe.ingredients.length} อย่าง</span>
                                </div>
                              </div>
                              <div className="recipe-card-footer">
                                <span className="recipe-calories">{recipe.caloriesPerServing} kcal</span>
                                <span style={{ fontSize: '0.75rem', padding: '2px 6px', background: 'rgba(255,255,255,0.06)', borderRadius: 4, color: 'var(--color-text-muted)' }}>
                                  {recipe.type === 'savory' ? t.savory : t.sweet}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="recipe-grid">
                {filteredRecipes.map(recipe => (
                  <div key={recipe.id} className="glass-card recipe-card" onClick={() => handleSelectRecipe(recipe)} style={{ cursor: 'pointer' }}>
                    <div className="recipe-card-img">
                      <img src={recipe.image} alt={recipe.name} />
                      <span className="recipe-cuisine-tag">{recipe.cuisine}</span>
                    </div>
                    <div className="recipe-card-content">
                      <h3 className="recipe-card-title">{recipe.name}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: 12, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {recipe.description}
                      </p>
                      <div className="recipe-stats">
                        <div className="recipe-stat-item">
                          <Timer size={14} />
                          <span>{recipe.prepTime + recipe.cookTime} {t.min}</span>
                        </div>
                        <div className="recipe-stat-item">
                          <ChefHat size={14} />
                          <span>วัตถุดิบ {recipe.ingredients.length} อย่าง</span>
                        </div>
                      </div>
                      <div className="recipe-card-footer">
                        <span className="recipe-calories">{recipe.caloriesPerServing} kcal</span>
                        <span style={{ fontSize: '0.75rem', padding: '2px 6px', background: 'rgba(255,255,255,0.06)', borderRadius: 4, color: 'var(--color-text-muted)' }}>
                          {recipe.type === 'savory' ? t.savory : t.sweet}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* แท็บหน้าระบบ: 2. ค้นหาของในตู้เย็น (Refrigerator Search) */}
        {activeTab === 'fridge' && (
          <div>
            <div className="glass-card" style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 8 }}><Scale style={{ inlineSize: 24, verticalAlign: 'middle', marginRight: 8 }} /> {t.fridgeTitle}</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{t.fridgeSubtitle}</p>
            </div>

            <div className="refrigerator-container">
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 16 }}>คลังวัตถุดิบจำลองในตู้เย็น (มี 1,500+ ชนิดให้สแกน)</h3>
                <div className="refrigerator-grid">
                  {/* เพิ่มวัตถุดิบพรีเซ็ต */}
                  {FRIDGE_PRESETS.map(preset => (
                    <div 
                      key={preset.id}
                      onClick={() => toggleFridgeSelection(preset.id)}
                      className={`ing-select-card ${fridgeSelected.includes(preset.id) ? 'selected' : ''}`}
                    >
                      <div className="ing-select-icon">{preset.icon}</div>
                      <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{preset.name}</span>
                    </div>
                  ))}
                  {/* เจนวัตถุดิบสุ่มเพิ่มเติมอีกจำนวนหนึ่งเพื่อแสดงการมี 1,500 ชนิด */}
                  {ingredientsDb.slice(30, 60).map(ing => (
                    <div 
                      key={ing.id}
                      onClick={() => toggleFridgeSelection(ing.id)}
                      className={`ing-select-card ${fridgeSelected.includes(ing.id) ? 'selected' : ''}`}
                    >
                      <div className="ing-select-icon">🍎</div>
                      <span style={{ fontSize: '0.85rem', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100px' }}>
                        {ing.name.split(' (')[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="selected-panel">
                <div className="glass-card">
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12 }}>วัตถุดิบที่เลือกไว้ ({fridgeSelected.length})</h3>
                  {fridgeSelected.length === 0 ? (
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>ไม่มีวัตถุดิบที่เลือก</p>
                  ) : (
                    <div className="selected-tokens">
                      {fridgeSelected.map(id => {
                        const ing = ingredientsDb.find(i => i.id === id) || FRIDGE_PRESETS.find(p => p.id === id);
                        return (
                          <div key={id} className="selected-token">
                            <span>{ing ? ing.name.split(' (')[0] : id}</span>
                            <span className="selected-token-remove" onClick={() => toggleFridgeSelection(id)}>×</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {fridgeSelected.length > 0 && (
                    <button 
                      onClick={() => setFridgeSelected([])} 
                      className="control-btn" 
                      style={{ marginTop: 16, width: '100%', justifyContent: 'center', borderColor: '#ef4444', color: '#ef4444' }}
                    >
                      ล้างทั้งหมด
                    </button>
                  )}
                </div>

                <div className="glass-card">
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12 }}>เมนูอาหารที่สอดคล้องมากที่สุด ({getFridgeRecipeMatches().length})</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {getFridgeRecipeMatches().slice(0, 5).map(({ recipe, matchPercent }) => (
                      <div 
                        key={recipe.id} 
                        onClick={() => handleSelectRecipe(recipe)}
                        className="ing-edit-row" 
                        style={{ cursor: 'pointer', transition: 'var(--transition-smooth)' }}
                      >
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{recipe.name}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>สัญชาติ: {recipe.cuisine}</div>
                        </div>
                        <div style={{ color: 'var(--color-success)', fontWeight: 'bold', fontSize: '0.95rem' }}>
                          ตรงกัน {matchPercent}%
                        </div>
                      </div>
                    ))}
                    {fridgeSelected.length > 0 && getFridgeRecipeMatches().length === 0 && (
                      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>ไม่พบสูตรอาหารที่ตรงกันในระบบ</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* แท็บหน้าระบบ: 3. วงล้อสุ่มกิจกรรม (Spinning Wheels) */}
        {activeTab === 'wheel' && (
          <div className="wheel-tab-content">
            <div className="glass-card" style={{ width: '100%', maxWidth: '600px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 8 }}><Dices style={{ inlineSize: 24, verticalAlign: 'middle', marginRight: 8 }} /> {t.spinTitle}</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{t.spinSubtitle}</p>
              
              {/* เลือกประเภทวงล้อ */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 16, margin: '24px 0' }}>
                <button 
                  onClick={() => { setWheelType('food'); setWheelResult(null); }} 
                  className={`control-btn ${wheelType === 'food' ? 'active' : ''}`}
                  style={{ background: wheelType === 'food' ? 'var(--color-accent)' : '', color: wheelType === 'food' ? 'white' : '' }}
                >
                  {t.spinFood}
                </button>
                <button 
                  onClick={() => { setWheelType('ingredient'); setWheelResult(null); }} 
                  className={`control-btn ${wheelType === 'ingredient' ? 'active' : ''}`}
                  style={{ background: wheelType === 'ingredient' ? 'var(--color-accent)' : '', color: wheelType === 'ingredient' ? 'white' : '' }}
                >
                  {t.spinIng}
                </button>
              </div>

              {/* กรองหมวดหมู่ที่จะสุ่ม (เฉพาะของสุ่มอาหาร) */}
              {wheelType === 'food' && (
                <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                  {["All", "Thai", "Japanese", "Italian", "Indian", "French"].map(cat => (
                    <button 
                      key={cat} 
                      onClick={() => { setSpinCategory(cat); setWheelResult(null); }}
                      className={`filter-chip ${spinCategory === cat ? 'active' : ''}`}
                      style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* โครงสร้างวงล้อ Canvas */}
            <div className="wheel-frame">
              <div className="wheel-pointer"></div>
              <canvas 
                ref={canvasRef} 
                width="460" 
                height="460" 
                className="wheel-canvas"
              />
              <div onClick={spinTheWheel} className="wheel-center-pin">
                {isSpinning ? 'SPINNING' : t.spinBtn}
              </div>
            </div>

            {/* การแสดงผลลัพธ์วงล้อ */}
            {wheelResult && (() => {
              const recipeObj = wheelType === 'food' ? recipesDb.find(r => r.name.startsWith(wheelResult) || wheelResult.startsWith(r.name.split(' (')[0])) : null;
              return (
                <div className="glass-card wheel-result-card" style={{ width: '100%', maxWidth: '400px', textAlign: 'center', marginTop: 20 }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1.5 }}>
                    ยินดีด้วย! คุณสุ่มได้
                  </span>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '8px 0 16px 0' }}>{wheelResult}</h3>
                  
                  {/* แสดงภาพอาหารเมื่อสุ่มได้เมนูอาหาร */}
                  {recipeObj && (
                    <div style={{ height: 160, borderRadius: 12, overflow: 'hidden', marginBottom: 20, border: '1px solid var(--border-card)' }}>
                      <img src={recipeObj.image} alt={recipeObj.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  )}

                  {wheelType === 'food' ? (
                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                      <button 
                        onClick={() => {
                          if (recipeObj) handleSelectRecipe(recipeObj);
                          else alert("นี่เป็นสูตรสุ่มจากคลังเพิ่มเติม กำลังพัฒนาหน้าเว็บสูตรขยาย");
                        }} 
                        className="control-btn" 
                        style={{ flex: 1, background: 'var(--color-success)', color: 'white', border: 'none', justifyContent: 'center' }}
                      >
                        ยืนยัน (Confirm)
                      </button>
                      <button 
                        onClick={() => setWheelResult(null)} 
                        className="control-btn" 
                        style={{ flex: 1, background: 'rgba(255,255,255,0.06)', color: 'var(--color-text-muted)', border: '1px solid var(--border-card)', justifyContent: 'center' }}
                      >
                        ยกเลิก (Cancel)
                      </button>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <button 
                        onClick={() => {
                          const ingObj = ingredientsDb.find(i => i.name.startsWith(wheelResult));
                          alert(`คุณสมบัติของ ${wheelResult}:\n- แคลอรี่: ${ingObj ? ingObj.caloriesPerGram : 1.2} kcal/g\n- โปรตีน: ${ingObj ? Math.round(ingObj.protein*100) : 10}%\n- คาร์โบไฮเดรต: ${ingObj ? Math.round(ingObj.carbs*100) : 20}%`);
                        }} 
                        className="control-btn" 
                        style={{ width: '100%', background: 'var(--color-accent)', color: 'white', border: 'none', justifyContent: 'center' }}
                      >
                        ดูสรรพคุณวัตถุดิบ (Wiki)
                      </button>
                      <button 
                        onClick={() => setWheelResult(null)} 
                        className="control-btn" 
                        style={{ width: '100%', background: 'rgba(255,255,255,0.06)', color: 'var(--color-text-muted)', border: '1px solid var(--border-card)', justifyContent: 'center' }}
                      >
                        ปิดหน้าต่าง
                      </button>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        )}

        {/* แท็บหน้าระบบ: 4. ชุมชนแชร์สูตรอาหาร (Social & Post Submission) */}
        {activeTab === 'social' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>{t.socialTitle}</h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>โพสต์โชว์จานโปรดของคุณ แชร์เคล็ดลับ หรือกดยื่นเสนอสูตรใหม่</p>
              </div>
              <button onClick={() => setActiveTab('social-post-creator')} className="control-btn" style={{ background: 'var(--color-accent)', color: 'white', border: 'none' }}>
                <Plus size={18} /> {t.postBtn}
              </button>
            </div>

            <div className="social-feed">
              {socialFeed.map(post => (
                <div key={post.id} className="glass-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'var(--color-accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                      {post.avatar}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{post.author}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>เชฟชุมชน N.Food</div>
                    </div>
                  </div>

                  <div className="social-card-img" style={{ height: 200, borderRadius: 12, overflow: 'hidden', marginBottom: 12 }}>
                    <img src={post.image} alt="Cooking post" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {post.hasBadge && (
                      <span className="cooked-badge">
                        <Check size={12} /> {t.cookedBadge}
                      </span>
                    )}
                  </div>

                  <p style={{ fontSize: '0.95rem', lineHeight: 1.5, marginBottom: 16 }}>{post.content}</p>
                  
                  {post.recipeLink && (
                    <button 
                      onClick={() => {
                        const recipe = recipesDb.find(r => r.id === post.recipeLink);
                        if (recipe) handleSelectRecipe(recipe);
                      }} 
                      className="control-btn" 
                      style={{ padding: '6px 12px', fontSize: '0.8rem', marginBottom: 16, width: '100%', justifyContent: 'center' }}
                    >
                      คลิกดูสูตรอาหารต้นแบบ
                    </button>
                  )}

                  <div className="social-actions" style={{ borderTop: '1px solid var(--border-card)', paddingTop: 12 }}>
                    <button onClick={() => handleLikePost(post.id)} className="social-action-btn" style={{ background: 'none', border: 'none' }}>
                      <Heart size={18} fill={likedPosts.has(post.id) ? 'var(--color-accent)' : 'none'} color={likedPosts.has(post.id) ? 'var(--color-accent)' : 'currentColor'} />
                      <span>{post.likes}</span>
                    </button>
                    <div className="social-action-btn">
                      <MessageSquare size={18} />
                      <span>{post.comments.length}</span>
                    </div>
                    <button onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("คัดลอกลิงก์แชร์ไปยัง LINE, Facebook, TikTok สำเร็จแล้ว!");
                    }} className="social-action-btn" style={{ background: 'none', border: 'none', marginLeft: 'auto' }}>
                      <Share2 size={18} />
                    </button>
                  </div>

                  {/* แสดงคอมเมนต์โต้ตอบ */}
                  <div style={{ marginTop: 16, background: 'rgba(0,0,0,0.15)', borderRadius: 8, padding: 12 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 10 }}>
                      {post.comments.map((comment, index) => (
                        <div key={index} style={{ fontSize: '0.85rem' }}>
                          {comment}
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <input 
                        type="text" 
                        placeholder="เขียนคอมเมนต์แสดงความเห็น..." 
                        value={newCommentTexts[post.id] || ''}
                        onChange={(e) => setNewCommentTexts({ ...newCommentTexts, [post.id]: e.target.value })}
                        className="form-input" 
                        style={{ flex: 1, height: 32, fontSize: '0.8rem', borderRadius: 16, padding: '0 12px' }}
                      />
                      <button onClick={() => handleAddComment(post.id)} className="control-btn" style={{ height: 32, fontSize: '0.8rem', padding: '0 12px', background: 'var(--color-accent)', color: 'white', border: 'none', borderRadius: 16 }}>
                        ส่ง
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* แท็บสร้างสูตรเสนอเข้าระบบ (Social Post Creator) */}
        {activeTab === 'social-post-creator' && (
          <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, borderBottom: '1px solid var(--border-card)', paddingBottom: 16 }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{t.communityDraftTitle}</h2>
              <button onClick={() => setActiveTab('social')} style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}>ยกเลิก</button>
            </div>

            <form onSubmit={handleRecipeSubmitForm} className="recipe-form-grid">
              <div>
                <div className="form-group">
                  <label>{t.recipeName}</label>
                  <input 
                    type="text" 
                    value={newRecipeName}
                    onChange={(e) => setNewRecipeName(e.target.value)}
                    placeholder="เช่น ข้าวผัดไข่สูตรคุณแม่" 
                    className="form-input" 
                    required
                  />
                </div>

                <div style={{ display: 'flex', gap: 16 }}>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>ประเภทเมนู</label>
                    <select value={newRecipeType} onChange={(e) => setNewRecipeType(e.target.value)} className="form-input">
                      <option value="savory">{t.savory}</option>
                      <option value="sweet">{t.sweet}</option>
                    </select>
                  </div>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>{t.cuisine}</label>
                    <select value={newRecipeCuisine} onChange={(e) => setNewRecipeCuisine(e.target.value)} className="form-input">
                      <option value="Thai">Thai</option>
                      <option value="Japanese">Japanese</option>
                      <option value="Italian">Italian</option>
                      <option value="Indian">Indian</option>
                      <option value="French">French</option>
                      <option value="Mexican">Mexican</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>คำอธิบายสั้นๆ</label>
                  <textarea 
                    value={newRecipeDescription}
                    onChange={(e) => setNewRecipeDescription(e.target.value)}
                    placeholder="เช่น สูตรอาหารง่ายๆ ใครๆ ก็ทำได้ หอมฟุ้งทั้งบ้าน..." 
                    className="form-textarea" 
                    rows={4}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>อัปเดตรูปภาพประกอบการทำ</label>
                  <div style={{ border: '2px dashed var(--border-card)', borderRadius: 12, padding: 24, textAlign: 'center', cursor: 'pointer', transition: 'var(--transition-smooth)' }} onClick={() => alert("จำลองการเลือกอัปเดตไฟล์รูปภาพเรียบร้อย!")}>
                    <Camera size={32} style={{ color: 'var(--color-accent)', marginBottom: 8 }} />
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>คลิกเพื่ออัปโหลดภาพอาหารสำเร็จรูป</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>รองรับ PNG, JPG สูงสุด 5MB</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="form-group">
                  <label>{t.ingredientsLabel}</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxHeight: '200px', overflowY: 'auto', padding: 8, border: '1px solid var(--border-card)', borderRadius: 10, marginBottom: 8 }}>
                    {newRecipeIngredients.map((ing, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: 8 }}>
                        <input 
                          type="text" 
                          placeholder="ชื่อวัตถุดิบ (เช่น เนื้อไก่)" 
                          value={ing.name}
                          onChange={(e) => {
                            const copy = [...newRecipeIngredients];
                            copy[idx].name = e.target.value;
                            setNewRecipeIngredients(copy);
                          }}
                          className="form-input" 
                          style={{ flex: 1, padding: 6, fontSize: '0.85rem' }} 
                        />
                        <input 
                          type="number" 
                          placeholder="ปริมาณ" 
                          value={ing.amount}
                          onChange={(e) => {
                            const copy = [...newRecipeIngredients];
                            copy[idx].amount = e.target.value;
                            setNewRecipeIngredients(copy);
                          }}
                          className="form-input" 
                          style={{ width: 70, padding: 6, fontSize: '0.85rem' }} 
                        />
                        <span style={{ fontSize: '0.8rem', alignSelf: 'center' }}>g</span>
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={handleAddSubmitIngredient} className="control-btn" style={{ padding: '6px 12px', fontSize: '0.8rem', alignSelf: 'flex-start' }}>
                    {t.addIngBtn}
                  </button>
                </div>

                <div className="form-group">
                  <label>{t.stepsLabel}</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxHeight: '220px', overflowY: 'auto', padding: 8, border: '1px solid var(--border-card)', borderRadius: 10, marginBottom: 8 }}>
                    {newRecipeSteps.map((step, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{step.step}.</span>
                        <input 
                          type="text" 
                          placeholder="อธิบายขั้นตอนการทำอาหาร..." 
                          value={step.text}
                          onChange={(e) => {
                            const copy = [...newRecipeSteps];
                            copy[idx].text = e.target.value;
                            setNewRecipeSteps(copy);
                          }}
                          className="form-input" 
                          style={{ flex: 1, padding: 6, fontSize: '0.85rem' }} 
                        />
                        <input 
                          type="number" 
                          placeholder="วิ" 
                          value={step.duration}
                          onChange={(e) => {
                            const copy = [...newRecipeSteps];
                            copy[idx].duration = parseInt(e.target.value) || 0;
                            setNewRecipeSteps(copy);
                          }}
                          className="form-input" 
                          style={{ width: 60, padding: 6, fontSize: '0.85rem' }} 
                        />
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={handleAddSubmitStep} className="control-btn" style={{ padding: '6px 12px', fontSize: '0.8rem', alignSelf: 'flex-start' }}>
                    {t.addStepBtn}
                  </button>
                </div>

                <button type="submit" className="control-btn" style={{ width: '100%', height: 48, background: 'var(--color-accent)', color: 'white', border: 'none', justifyContent: 'center', fontWeight: 'bold', fontSize: '1rem', marginTop: 12 }}>
                  ส่งเสนอสูตรอาหาร
                </button>
              </div>
            </form>
          </div>
        )}

        {/* แดชบอร์ดตรวจสอบของแอดมิน (Admin Panel) */}
        {activeTab === 'admin' && user?.isAdmin && (
          <div>
            <div className="glass-card" style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 8 }}><ChefHat style={{ inlineSize: 24, verticalAlign: 'middle', marginRight: 8 }} /> {t.reviewTitle}</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>ตรวจสอบ ยืนยันความถูกต้อง ก่อนจะเผยแพร่สูตรอาหารให้เป็นพจนานุกรมสาธารณะ</p>
            </div>

            {pendingRecipes.length === 0 ? (
              <div className="glass-card" style={{ textAlign: 'center', padding: 48 }}>
                <p style={{ color: 'var(--color-text-muted)' }}>ไม่มีสูตรอาหารที่รออนุมัติในขณะนี้</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {pendingRecipes.map(recipe => (
                  <div key={recipe.id} className="glass-card" style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr', gap: 24 }}>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-accent)', marginBottom: 8 }}>{recipe.name}</h3>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: 12 }}>ส่งโดย: {recipe.author}</div>
                      <p style={{ fontSize: '0.9rem', lineHeight: 1.5, marginBottom: 16 }}>{recipe.description}</p>
                      
                      <div style={{ display: 'flex', gap: 12 }}>
                        <button onClick={() => handleApproveRecipe(recipe.id)} className="control-btn" style={{ flex: 1, backgroundColor: 'var(--color-success)', color: 'white', border: 'none', justifyContent: 'center' }}>
                          {t.approve}
                        </button>
                        <button onClick={() => handleRejectRecipe(recipe.id)} className="control-btn" style={{ flex: 1, backgroundColor: '#ef4444', color: 'white', border: 'none', justifyContent: 'center' }}>
                          {t.reject}
                        </button>
                      </div>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 8 }}>{t.ingredientsLabel}</h4>
                      <ul style={{ paddingLeft: 16, fontSize: '0.85rem', marginBottom: 16 }}>
                        {recipe.ingredients.map((ing, i) => (
                          <li key={i}>{ing.name} - {ing.amount} {ing.unit}</li>
                        ))}
                      </ul>

                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 8 }}>{t.stepsLabel}</h4>
                      <ol style={{ paddingLeft: 16, fontSize: '0.85rem' }}>
                        {recipe.steps.map((step, i) => (
                          <li key={i}>{step.text} ({step.duration} วินาที)</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* แท็บหน้าระบบ: 5. รายละเอียดสูตรอาหารและตัวคำนวณแคลอรี่แบบ Real-time */}
        {activeTab === 'recipe-detail' && selectedRecipe && (
          <div>
            {/* ปุ่มย้อนกลับ */}
            <button onClick={() => setActiveTab('home')} className="control-btn" style={{ marginBottom: 20 }}>
              <ChevronLeft size={18} /> ย้อนกลับ
            </button>

            <div className="recipe-detail-layout">
              <div>
                <div className="recipe-detail-hero">
                  <img src={selectedRecipe.image} alt={selectedRecipe.name} />
                  <div className="recipe-detail-title-overlay">
                    <span className="featured-tag">{selectedRecipe.cuisine}</span>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'white' }}>{selectedRecipe.name}</h2>
                    <p style={{ color: '#e5e7eb', fontSize: '0.95rem' }}>{selectedRecipe.description}</p>
                  </div>
                </div>

                {/* ตัวปรับสัดส่วนจานเสิร์ฟแบบไดนามิก 1 - 1,000,000 จาน */}
                <div className="servings-adjuster">
                  <span style={{ fontWeight: 700, color: 'var(--color-text-main)' }}>{t.servings}:</span>
                  <button onClick={() => handleServingChange(servings - 1)} className="serving-btn">-</button>
                  <input 
                    type="number" 
                    value={servings}
                    onChange={(e) => handleServingChange(e.target.value)}
                    className="serving-input"
                  />
                  <button onClick={() => handleServingChange(servings + 1)} className="serving-btn">+</button>
                  
                  <input 
                    type="range" 
                    min="1" 
                    max="1000" 
                    value={servings <= 1000 ? servings : 1000} 
                    onChange={(e) => handleServingChange(e.target.value)}
                    className="serving-slider"
                  />
                </div>

                <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                  <button onClick={() => handleServingChange(100)} className="filter-chip" style={{ fontSize: '0.8rem' }}>100 จาน</button>
                  <button onClick={() => handleServingChange(1000)} className="filter-chip" style={{ fontSize: '0.8rem' }}>1,000 จาน</button>
                  <button onClick={() => handleServingChange(100000)} className="filter-chip" style={{ fontSize: '0.8rem' }}>100,000 จาน</button>
                  <button onClick={() => handleServingChange(1000000)} className="filter-chip" style={{ fontSize: '0.8rem' }}>1,000,000 จาน 🏆</button>
                </div>

                {/* ข้อมูลโภชนาการแบบ Real-time */}
                <div className="glass-card" style={{ marginBottom: 30 }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Scale size={20} /> คุณค่าทางโภชนาการรวม (สเกลตามจานเสิร์ฟและวัตถุดิบจริง)
                  </h3>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, textAlign: 'center', marginBottom: 20 }}>
                    <div style={{ background: 'var(--bg-primary)', padding: 12, borderRadius: 12, border: '1px solid var(--border-card)' }}>
                      <div style={{ color: 'var(--color-accent)', fontWeight: 800, fontSize: '1.4rem' }}>{Math.round(calculatedCalories)}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{t.calories} (kcal)</div>
                    </div>
                    <div style={{ background: 'var(--bg-primary)', padding: 12, borderRadius: 12, border: '1px solid var(--border-card)' }}>
                      <div style={{ fontWeight: 800, fontSize: '1.4rem' }}>{Math.round(calculatedProtein)}g</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{t.protein}</div>
                    </div>
                    <div style={{ background: 'var(--bg-primary)', padding: 12, borderRadius: 12, border: '1px solid var(--border-card)' }}>
                      <div style={{ fontWeight: 800, fontSize: '1.4rem' }}>{Math.round(calculatedCarbs)}g</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{t.carbs}</div>
                    </div>
                    <div style={{ background: 'var(--bg-primary)', padding: 12, borderRadius: 12, border: '1px solid var(--border-card)' }}>
                      <div style={{ fontWeight: 800, fontSize: '1.4rem' }}>{Math.round(calculatedFat)}g</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{t.fat}</div>
                    </div>
                  </div>

                  <div className="macro-chart-container">
                    <div className="macro-pie" style={{ background: `conic-gradient(#ff6f3c 0% 45%, #10b981 45% 80%, #f59e0b 80% 100%)` }}>
                      <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--bg-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                        Macros
                      </div>
                    </div>
                    <div className="macro-legend">
                      <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#ff6f3c' }}></span>
                        <span>{t.carbs}: 45%</span>
                      </div>
                      <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#10b981' }}></span>
                        <span>{t.protein}: 35%</span>
                      </div>
                      <div className="legend-item">
                        <span className="legend-color" style={{ backgroundColor: '#f59e0b' }}></span>
                        <span>{t.fat}: 20%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* การแก้ไขวัตถุดิบชั่วคราวและคำนวณแคลแบบ Real-time */}
                <div className="glass-card">
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 16 }}>{t.customIngredients}</h3>
                  <div className="ingredients-edit-list">
                    {selectedRecipe.ingredients.map(ing => {
                      const editInfo = customIngredients[ing.id] || { active: true, amount: ing.amount };
                      return (
                        <div key={ing.id} className="ing-edit-row">
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input 
                              type="checkbox" 
                              checked={editInfo.active}
                              onChange={() => toggleIngredientActive(ing.id)}
                              className="ing-edit-checkbox"
                            />
                            <span className="ing-edit-name" style={{ textDecoration: editInfo.active ? 'none' : 'line-through', color: editInfo.active ? 'var(--color-text-main)' : 'var(--color-text-muted)' }}>
                              {ing.name}
                            </span>
                          </div>
                          
                          <div className="ing-edit-amount-control">
                            <input 
                              type="number" 
                              value={editInfo.amount}
                              onChange={(e) => handleIngredientAmountChange(ing.id, e.target.value)}
                              disabled={!editInfo.active}
                              className="ing-amount-input"
                            />
                            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                              x จานเสิร์ฟ = <strong>{formatAmount(editInfo.amount)}</strong>
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* วิธีทำอาหาร และปุ่มเริ่มทำ Cooking Mode */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div className="glass-card" style={{ height: 'fit-content' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: 16 }}>{t.stepsLabel}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
                    {selectedRecipe.steps.map(step => (
                      <div key={step.step} style={{ display: 'flex', gap: 12 }}>
                        <span style={{ background: 'var(--color-accent-glow)', color: 'var(--color-accent)', width: 24, height: 24, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold', flexShrink: 0 }}>
                          {step.step}
                        </span>
                        <div>
                          <p style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>{step.text}</p>
                          {step.duration > 0 && (
                            <span style={{ fontSize: '0.75rem', color: 'var(--color-warning)', fontWeight: 600 }}>
                              ⏰ ใช้เวลา {formatTime(step.duration)} {t.min}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button onClick={startCookingMode} className="control-btn" style={{ width: '100%', background: 'var(--color-accent)', color: 'white', border: 'none', height: 48, justifyContent: 'center', fontWeight: 'bold' }}>
                    <Timer size={18} /> {t.startCooking}
                  </button>
                </div>

                {/* ส่วนของวัตถุดิบทดแทนสอดคล้องกับหัวข้อ 3 */}
                <div className="glass-card">
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12 }}>{t.alternativeIngTitle}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {Object.entries(selectedRecipe.alternativeIngredients).map(([ingId, substitutes]) => {
                      const baseIng = selectedRecipe.ingredients.find(i => i.id === ingId);
                      return (
                        <div key={ingId} style={{ fontSize: '0.85rem' }}>
                          <strong>{baseIng ? baseIng.name : ingId}</strong> ทดแทนได้ด้วย: 
                          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
                            {substitutes.map((sub, i) => (
                              <span key={i} className="filter-chip" style={{ padding: '3px 8px', fontSize: '0.75rem', background: 'rgba(255,255,255,0.04)' }}>
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. โมดอล Cooking Mode หน้าจอใหญ่เต็มพิกัด รองรับการจับถือง่าย */}
        {cookingStep !== null && selectedRecipe && (
          <div className="cooking-modal">
            <div className="cooking-header">
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{selectedRecipe.name}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>โหมดเข้าครัวสำหรับคนรักสุขภาพ</p>
              </div>

              {/* ปุ่มเสียงสั่งการจำลอง */}
              <button 
                onClick={() => setVoiceActive(!voiceActive)} 
                className={`control-btn ${voiceActive ? 'active' : ''}`}
                style={{ backgroundColor: voiceActive ? 'var(--color-success)' : '', borderColor: voiceActive ? 'var(--color-success)' : '' }}
              >
                <Mic size={18} />
                <span>{voiceActive ? 'Voice ON' : 'Voice OFF'}</span>
              </button>

              <button onClick={() => setCookingStep(null)} className="control-btn" style={{ borderColor: '#ef4444', color: '#ef4444' }}>
                ออกจากโหมดปรุงอาหาร
              </button>
            </div>

            <div className="cooking-body">
              {voiceActive && (
                <div style={{ padding: '8px 16px', background: 'var(--color-accent-glow)', border: '1px dashed var(--color-accent)', borderRadius: 20, color: 'var(--color-accent)', fontSize: '0.85rem', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--color-accent)', animation: 'pulse 1.5s infinite' }}></span>
                  {t.voiceActive}
                </div>
              )}

              <div className="cooking-step-num">ขั้นตอนที่ {cookingStep + 1} / {selectedRecipe.steps.length}</div>
              <div className="cooking-step-text">
                "{selectedRecipe.steps[cookingStep].text}"
              </div>

              {/* ตัวนับเวลาถอยหลัง */}
              {selectedRecipe.steps[cookingStep].duration > 0 && (
                <div className="step-timer-container">
                  <div className="timer-digits">{formatTime(timerSeconds)}</div>
                  <div className="timer-controls">
                    <button 
                      onClick={() => setTimerActive(!timerActive)} 
                      className="timer-btn timer-btn-primary"
                    >
                      {timerActive ? 'PAUSE' : 'START TIMER'}
                    </button>
                    <button 
                      onClick={() => {
                        setTimerActive(false);
                        setTimerSeconds(selectedRecipe.steps[cookingStep].duration);
                      }} 
                      className="timer-btn timer-btn-secondary"
                    >
                      RESET
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="cooking-footer">
              <button 
                onClick={handlePrevStep} 
                disabled={cookingStep === 0}
                className="control-btn"
                style={{ opacity: cookingStep === 0 ? 0.5 : 1 }}
              >
                <ChevronLeft size={20} /> ขั้นตอนก่อนหน้า
              </button>
              
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                N.Food Assist Mode
              </div>

              <button 
                onClick={handleNextStep}
                className="control-btn"
                style={{ background: 'var(--color-accent)', color: 'white', border: 'none' }}
              >
                {cookingStep === selectedRecipe.steps.length - 1 ? 'เสร็จสิ้นการทำ' : 'ขั้นตอนถัดไป'} <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
