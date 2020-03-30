import React from 'react'

const originalSources = [
  {
    key: 5.1,
    title: 'تغییرات نسخه ۵.۱ سوییفت',
    link: 'https://www.hackingwithswift.com/articles/182/whats-new-in-swift-5-1',
    github: 'https://github.com/twostraws/whats-new-in-swift-5-1'
  },
  {
    key: 5.0,
    title: 'تغییرات نسخه ۵.۰ سوییفت',
    link: 'https://www.hackingwithswift.com/articles/126/whats-new-in-swift-5-0',
    github: 'https://github.com/twostraws/whats-new-in-swift-5-0'
  },
  {
    key: 4.2,
    title: 'تغییرات نسخه ۴.۲ سوییفت',
    link: 'https://www.hackingwithswift.com/articles/77/whats-new-in-swift-4-2',
    github: 'https://github.com/twostraws/whats-new-in-swift-4-2'
  },
  {
    key: 4.1,
    title: 'تغییرات نسخه ۴.۱ سوییفت',
    link: 'https://www.hackingwithswift.com/articles/50/whats-new-in-swift-4-1',
    github: 'https://github.com/twostraws/whats-new-in-swift-4-1'
  },
  {
    key: 4.0,
    title: 'تغییرات نسخه ۴ سوییفت',
    link: 'https://www.hackingwithswift.com/swift4',
    github: ''
  },
  {
    key: 3.1,
    title: 'تغییرات نسخه ۳.۱ سوییفت',
    link: 'https://www.hackingwithswift.com/swift3-1',
    github: ''
  },
  {
    key: 3.0,
    title: 'تغییرات نسخه ۳.۰ سوییفت',
    link: 'https://www.hackingwithswift.com/swift3',
    github: ''
  },
  {
    key: 2.2,
    title: 'تغییرات نسخه ۲.۲ سوییفت',
    link: 'https://www.hackingwithswift.com/swift2-2',
    github: ''
  },
  {
    key: 2.0,
    title: 'تغییرات نسخه ۲ سوییفت',
    link: 'https://www.hackingwithswift.com/swift2',
    github: ''
  },
]

function Footer() {
  return (
    <>
    <footer className="uk-container uk-container-expand uk-section" >
      <div className="uk-container uk-container-small uk-text-muted">
        <hr className="uk-divider-icon"/>
        <h1>اعتبارش مال کیه؟!</h1>
        <p>مطالبی که مشاهده می‌کنین، توسط پاول هادسون نوشته شده. اگه سوال یا نظری داشتین، می‌تونین از طریق توییتر 
          <a href='https://twitter.com/twostraws' className="" dir='ltr'> @twostraws </a>
          و یا پست الکترونیک 
          <a href='mailto:paul@hackingwithswift.com'> paul@hackingwithswift.com </a>
          بیان‌شون کنین.
        </p>
        <p>مطالب آورده‌شده، بصورت مختصر هستن. و نسخه‌های کامل و مفصل رو می‌تونین از طریق لینک‌های زیر دسترسی داشته باشین: </p>
        <ul> 
          {
            originalSources.map(item => <li key={item.key}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <p>همچنین برای بعضی از تغییرات، فایل‌های Playground آماده شده که امتحانش خالی از لطف نیست:
          {
            originalSources
              .filter(item => item.github)
              .map(item => <a key={item.key} href={item.github}>{item.title}</a>)
              .reduce((prev, curr) => [prev, '، ', curr])
          }
        </p>
        <p>برای یادگیری مطالب بیشتر در مورد سوییفت، <a href='https://www.hackingwithswift.com/'>وب‌سایت Hacking with Swift</a> آموزش‌های زیادی بصورت رایگان ارائه میده.</p>
        <hr className="uk-divider-icon"/>
        <p className="uk-text-small">
          👈 این پروژه بصورت متن‌باز تهیه شده و از طریق <a href="https://github.com/omidgolparvar/whats-new-in-swift">گیت‌هاب</a> قابل دسترس و ویرایش هست.
          <br/>
          👈 استفاده از مطالب این وب‌سایت به هر نحو <span className="uk-text-bold uk-text-emphasis">آزاد</span> هست. ما خودمون هم بی‌اجازه داریم ترجمه می‌کنیم!! 😆
        </p>
      </div>
    </footer>
    </>
  )
}

export default Footer