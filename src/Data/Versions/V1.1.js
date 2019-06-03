import React from 'react'

function V1_1() {
  return (
    <>
    <div className="swift-version-title uk-text-lead uk-margin-medium-bottom uk-margin-medium-top">تغییرات سوییفت {1.1.toLocaleString('fa')}</div>
    <article className="uk-article">
      <h1 className='uk-h2'>تابع <code dir='ltr'>countElements()</code> الان شده <code dir='ltr'>count()</code></h1>
      <p>توی نسخه ۱.۰ سوییفت اینجوری می‌تونستین تعداد المان‌های یه آرایه رو بگیرین:</p>
      <pre>
        <code className="swift">{`let items = [1, 2, 3]
          println(countElements(items))
        `}</code>
      </pre>
      <p>توی سوییفت ۱.۱ تابع <code dir='ltr'>countElements()</code> به <code dir='ltr'>count()</code> تغییر نام داده؛ در نتیجه کد بالا بصورت زیر تغییر می‌کنه:</p>
      <pre>
        <code className="swift">{`let items = [1, 2, 3]
          println(count(items))
        `}</code>
      </pre>
      <p><strong>توجه داشته باشین:</strong> این مورد دوباره توی نسخه‌های بعدی سوییفت تغییر کرد؛ الان یه مشخصه داریم به اسم <code dir='ltr'>count</code> که برای تعداد المان‌های آرایه (و کالکشن و حتی تعداد حروف متن) بکار میره.</p>
    </article>
    <article className="uk-article">
      <h1 className='uk-h2'>برنامه‌های macOS الان می‌تونن از <code dir='ltr'>@NSApplicationMain</code> استفاده کنن</h1>
      <p>نرم‌افزارهای iOS یه مشخصه به اسم <code dir='ltr'>@UIApplicationMain</code> دارن که کارش اینه بطور خودکار تابع <code dir='ltr'>UIApplicationMain()</code> رو بسازه تا نرم‌افزار بتونه باهاش کار کنه. حالا مشابه همین روند برای نرم‌افزارهای macOS هم اضافه شده و مشخصه (جدید) <code dir='ltr'>@NSApplicationMain</code> بطور خودکار به <code dir='ltr'>delegate</code> برنامه‌های Cocoa توی پروژه‌های جدید اضافه میشه.</p>
    </article>
    </>
  )
}

export default {
  version: 1.1,
  content: V1_1
}