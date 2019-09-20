import React from 'react'

function V4_1() {
  return (
    <>
    <div className="swift-version-title uk-text-lead uk-margin-medium-bottom  uk-margin-medium-top">تغییرات سوییفت {4.1.toLocaleString('fa')}</div>
    <article className="uk-article">
      <h1 className='uk-h2'>سنتزکردن <code dir='ltr'>Equatable</code> و <code dir='ltr'>Hashable</code></h1>
      <p>پروتکل <code dir='ltr'>Equatable</code> این اجازه رو به سوییفت میده تا یه شیء از یه تایپ رو برای <b>برابری</b> با یه شیء دیگه، مورد بررسی قرار بده. مثلا وقتی می‌نویسیم <code dir='ltr'>5 == 5</code> سوییفت این رو می‌فهمه که چه معنی داره، چون نوع <code>Int</code> پروتکل <code>Equatable</code> رو پیاده‌سازی کرده، که به این معنیه که متدی تعریف شده که بیانگر معنای <code>==</code> بین دو موجودیت از نوع <code>Int</code> هست.</p>

      <p>پیاده‌سازی <code>Equatable</code> برای تایپ‌های خودتون این اجازه رو میدن که رفتارشون تا حدی شبیه تایپ‌های خود سوییفت بشه، و در کل پیشنهاد میشه تا <code>Struct</code>هاتون این پروتکل رو پیاده‌سازی کنن.</p>
      
      <p>هرچند، پیاده‌سازی پروتکل <code>Equatable</code> ممکنه یکم اذیت‌کننده باشه. برای مثال، کد زیر رو در نظر بگیرین:</p>

      <pre>{`struct Person {
          var firstName: String
          var lastName: String
          var age: Int
          var city: String
      }`}
      </pre>
    </article>
    </>
  )
}

export default {
  version: 4.1,
  content: V4_1
}