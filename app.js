/* ==========================================================
   1) داده‌های منو
   ========================================================== */
const meno = [
    { name: "قهوه ترک", price: 47, category: "نوشیدنی گرم", isAvailable: true },
    { name: "چای", price: 25, category: "نوشیدنی گرم", isAvailable: true },
    { name: "کیک خیس", price: 69, category: "کیک", isAvailable: true },
    { name: "چیز کیک", price: 89, category: "کیک", isAvailable: true },
    { name: "شیک نوتلا", price: 99, category: "نوشیدنی سرد", isAvailable: true },
    { name: "آیس کافی", price: 79, category: "نوشیدنی سرد", isAvailable: false },
    { name: "اسپرسو", price: 99, category: "نوشیدنی گرم", isAvailable: false },
    { name: "موکا", price: 83, category: "نوشیدنی سرد", isAvailable: true },
    { name: "لاته", price: 79, category: "نوشیدنی گرم", isAvailable: true },
    { name: "ماچا", price: 102, category: "نوشیدنی سرد", isAvailable: false },
    { name: "کیک هویج", price: 55, category: " کیک", isAvailable: true },
]
function renderMenu() {

    const menuContainer = document.querySelector("#menuContainer")


    meno.forEach(item => {
        menuContainer.innerHTML += `
    <div class="memu_item">
       <h3> ${item.name}</h3>
        <p>  ${item.category}   </p>
        <span>${item.price} تومن</span>
    </div>
    `
    })
}

// اضافه کردن یک آیتم جدید به منو
meno.push({ name: "آب", price: 10, category: "نوشیدنی سرد", isAvailable: true })


/* ==========================================================
   2) نمایش منو در صفحه
   ========================================================== */

// ساخت کارت هر آیتم منو و اضافه کردن آن به کانتینر



/* ==========================================================
   3) تغییر عنوان اصلی (h1)
   ========================================================== */
const heading = document.querySelector("h1")

heading.textContent = "red wall - حالا با جاوا اسکریپت"
heading.style.color = "red"
heading.style.fontSize = "30px"

// کار با کلاس‌ها: افزودن، حذف و تاگل
heading.classList.add("highlight")
heading.classList.remove("highlight")
heading.classList.toggle("highlight")


/* ==========================================================
   4) خواندن مقدار input
   ========================================================== */
const input = document.querySelector("input")
console.log(input.value)


/* ==========================================================
   5) دکمه‌ی هیرو (Hero)
   ========================================================== */
const heroBtn = document.querySelector(".heroBtn")
const contactSection = document.querySelector("#contact")

// با کلیک: تغییر متن و افزودن کلاس به دکمه
heroBtn.addEventListener("click", () => {
    heroBtn.textContent = "بیلاخ طلایی "
    heroBtn.classList.add("hero-button")
})

// با کلیک: اسکرول به بخش تماس
// heroBtn.addEventListener("click", () => {
//     contactSection.scrollIntoView()
// })


/* ==========================================================
   6) فرم تماس و اعتبارسنجی
   ========================================================== */
const form = document.querySelector("form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const msgInput = document.querySelector("#msg")
const formMsg = document.querySelector("#formMsg")

form.addEventListener("submit", (e) => {
    // جلوگیری از رفرش شدن صفحه
    e.preventDefault()

    const nameValue = nameInput.value
    const emailValue = emailInput.value
    const msgValue = msgInput.value

    // بررسی خالی نبودن فیلدها
    if (nameValue === "" || emailValue === "" || msgValue === "") {
        formMsg.textContent = "لطفا همه فیلد ها را پر کنید"
        formMsg.style.color = "crimson"
        return
    }

    // بررسی معتبر بودن ایمیل
    if (!emailValue.includes("@")) {
        formMsg.textContent = "ایمیل معتبر نیست"
        formMsg.style.color = "crimson"
        return
    }

    // پیام موفقیت و پاک کردن فرم
    formMsg.textContent = `ممنون ${nameValue} به زودی باهاتون تماس میگیریم`
    formMsg.style.color = "green"
    form.reset()
})


/* ==========================================================
   7) منوی موبایل (باز و بسته شدن)
   ========================================================== */
const menuToggle = document.querySelector("#menuToggle")
const navLinks = document.querySelector("#navLinks")

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open")
})


/* ==========================================================
   8) انتخاب عکس‌ها با کلیک (تاگل)
   ========================================================== */
const photoKhob = document.querySelectorAll(".photo")

photoKhob.forEach((photo) => {
    photo.addEventListener("click", () => {
        photo.classList.toggle("selected")
    })
})


/* ==========================================================
   9) تغییر ظاهر هدر هنگام اسکرول
   ========================================================== */
const haeder = document.querySelector(".s")

window.addEventListener("scroll", () => {
    // اگر بیش از ۵۰ پیکسل اسکرول شد، کلاس scrolled اضافه می‌شود
    if (window.scrollY > 50) {
        haeder.classList.add("scrolled")
    } else {
        haeder.classList.remove("scrolled")
    }
})



renderMenu()