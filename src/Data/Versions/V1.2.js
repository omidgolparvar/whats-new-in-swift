import React from 'react'

function V1_2() {
  return (
    <>
    <div className="swift-version-title uk-text-lead uk-margin-medium-bottom  uk-margin-medium-top">تغییرات سوییفت {1.2.toLocaleString('fa')}</div>
    <article className="uk-article">
      <h1 className='uk-h2'>تابع <code dir='ltr'>zip()</code> دوتا مجموعه رو باهم ترکیب می‌کنه</h1>
      <p>اگه دوتا مجموعه داشته باشین و بخواین باهم ترکیب‌شون کنین، تابع <code dir='ltr'>zip()</code> این کار رو انجام میده و یه آرایه از Tuple براتون برمی‌گردونه:</p>
      <pre>
      {`let names = ["Sophie", "Charlotte", "John"]
        let scores = [90, 92, 95]
        let zipped = zip(names, scores)`}
      </pre>
      <p>در نتیجه کد بالا، خروجی به این صورت در اختیارتون می‌ذاره: <code dir='ltr'>{`[("Sophie", 90), ("Charlotte", 92),("John", 95)]`}</code></p>
    </article>

    <article className="uk-article">
    <h1 className='uk-h2'>استفاده از <code dir='ltr'>if let</code>چندگانه</h1>
    <p>الان می‌تونیم چندین <code dir='ltr'>if let</code> رو در یک خط بنویسیم و با استفاده از کاما اونا رو از هم جدا کنیم، و با استفاده از این کار، از تورفتگی‌های اضافی در کد جلوگیری کنیم.
    </p>
    <p>برای مثال ممکنه قبلا کدی شبیه به کد زیر داشته باشین:</p>
    <pre>
      <code className="swift">{`if let user = loadUsername() {
          if let password = decryptPassword() {
              authenticate(user, password)
          }
      }`}</code>
    </pre>
    <p>از الان می‌ةونیم به این صورت بنویسیمش:</p>
    <pre>
      <code className="swift">{`if let user = loadUsername(), let password = decryptPassword() {
          authenticate(user, password)
      }`}</code>
    </pre>
    </article>

    <article className="uk-article">
      <h1 className='uk-h2'>Type Casting الان شامل <code dir='ltr'>as!</code> هم میشه</h1>
      <p>از سوییفت ۱.۲ به بعد، سه نوع type casting داریم: <code dir='ltr'>as</code> که مواقعی استفاده میشه که قطعا نتیجه‌اش موفقیت‌آمیز هستش (مثل <code dir='ltr'>someString as NSString</code>)، <code dir='ltr'>as?</code> که مواقعی استفاده میشه که روندش ممکنه موفقیت‌آمیز نباشه (مثل <code dir='ltr'>someView as? UIImageView</code>)، و <code dir='ltr'>as!</code> که با استفاده ازش داریم اون روند رو بصورت زوری اعمال می‌کنیم! و اگه این type cast درست نباشه، برنامه کرش می‌کنه.</p>

      <p>برای مثال:</p>
      <pre>
        <code className="swift">{`let submitButton = vw.viewWithTag(10) as! UIButton
        `}</code>
      </pre>
    </article>
    </>
  )
}

export default {
  version: 1.2,
  content: V1_2
}