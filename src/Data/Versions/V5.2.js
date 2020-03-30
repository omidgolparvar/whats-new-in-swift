import React from 'react'
import Article from '../../Components/Article'

const _code0 = `
struct User {
  let name: String
  let age: Int
  let bestFriend: String?

  var canVote: Bool {
      age >= 18
  }
}`

const _code1 = `
let eric = User(name: "Eric Effiong", age: 18, bestFriend: "Otis Milburn")
let maeve = User(name: "Maeve Wiley", age: 19, bestFriend: nil)
let otis = User(name: "Otis Milburn", age: 17, bestFriend: "Eric Effiong")
let users = [eric, maeve, otis]`

const _code2 = `
let userNames = users.map(\\.name)
print(userNames)
`

const _code3 = `
let oldUserNames = users.map { $0.name }
`

const _code4 = `
let voters = users.filter(\\.canVote)
`

const _code5 = `
let bestFriends = users.compactMap(\\.bestFriend)
`

function V5_2() {
  return (
    <>
    <Article.Title version={5.2} />
    {/* Key Path Expressions as Functions */}
    <Article.Content>
      <Article.H1>
        استفاده از KeyPath بعنوان تابع
      </Article.H1>
      <Article.P>
        پروپوزال <a href='https://github.com/apple/swift-evolution/blob/master/proposals/0249-key-path-literal-function-expressions.md'>SE-0249</a> یه میانبر باحال معرفی کرد که با استفاده از اون میشه از KeyPathها توی شرایط خاصی استفاده‌های باحالی کرد.
      </Article.P>
      <Article.P>
        این پروپوزال رویه رو اینجوری بیان می‌کنه که «هرجا توابعی از نوع <Article.InlineCode code='(Root) -> Value'/> مجاز هستن، میشه از <Article.InlineCode code='\Root.value'/> استفاده کرد»، و معنی‌اش اینکه که اگه قبلا یه Car رو به یه متدی می‌دادیم و مشخصه license رو باهاش برمی‌گردوندیم، حالا می‌تونیم از <Article.InlineCode code='Car.license'/> استفاده کنیم.
      </Article.P>
      <Article.P>
        برای درک بهتر این موضوع، مدل زیر رو در نظر بگیرین که User هست که دارای چهارتا مشخصه هست:
      </Article.P>
      <Article.Code code={_code0}/>
      <Article.P>
        می‌تونیم یه چندتا از این موجودیت بسازیم و همه رو داخل یه آرایه نگه داریم:
      </Article.P>
      <Article.Code code={_code1}/>
      <Article.P>
        حالا قسمت جالبش اینه: اگه بخواین یه آرایه داشته باشین از اسامی این کاربران، با استفاده از رویه جدید می‌تونین اینجوری انجامش بدین:
      </Article.P>
      <Article.Code code={_code2}/>
      <Article.P>
        همین کار رو توی نسخه‌های قبلی باید با استفاده از یه Closure انجام می‌دادین:
      </Article.P>
      <Article.Code code={_code3}/>
      <Article.P>
        همین رویه رو می‌تونین هرجا بخواین استفاده کنین. هرجا که قبلا یه متد می‌نوشتین که یه موجودیت رو بگیره و یکی از مشخصه‌هاش رو برگردونه، الان می‌تونین بجاش از KeyPath استفاده کنین. مثلا برای داشتن لیست کاربرانی که می‌تونن رای بدن، بصورت زیر عمل می‌کنیم:
      </Article.P>
      <Article.Code code={_code4}/>
      <Article.P>
        همچنین کد زیر، بهترین دوستان کاربران رو (در صورت وجود) برمی‌گردونه:
      </Article.P>
      <Article.Code code={_code5}/>
    </Article.Content>
    
    {/* Callable values of user-defined nominal types */}
    {/* Subscripts can now declare default arguments */}
    {/* Lazy filtering order is now reversed */}
    {/* New and improved diagnostics */}

    </>
  )
}

export default {
  version: 5.2,
  content: V5_2
}