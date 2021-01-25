const section = document.createElement('section');
const header = document.createElement('header');
const footer = document.createElement('footer')
const div = document.createElement('div');
const a = document.createElement('a');
const img = document.createElement('img');
const nav = document.createElement('nav')
const input = document.createElement('input')
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const h3 = document.createElement('h3');
const h5 = document.createElement('h5')
const ul = document.createElement('ul');
const li = document.createElement('li');
const label = document.createElement('label')
const p = document.createElement('p');
const btn = document.createElement('button');
const span = document.createElement('span');
const iframe = document.createElement('iframe')
const container = div.cloneNode();
const row = div.cloneNode();
const work = section.cloneNode();
const hero = section.cloneNode();
const apps = section.cloneNode();
const standart = section.cloneNode();
const project = section.cloneNode();
const video = section.cloneNode();
const sub = section.cloneNode();
const br = document.createElement('br');
const col5 = div.cloneNode();
const col4 = div.cloneNode();
const col3 = div.cloneNode();
const col2 = div.cloneNode();

col5.className = 'col-5'
col5.setAttribute('style' , 'width: 45%;')
col4.className = 'col-4'
col4.setAttribute('style' , 'width: 31%;')
col3.className = 'col-3'
col3.setAttribute('style' , 'width: 22%;')
col2.className = 'col-2'
col2.setAttribute('style' , 'width: 12%;')
br.setAttribute('style','width:100%; height: 1px; background-color:black;color:black;')
a.href = '#';
document.body.setAttribute('style','margin: 0; padding: 0;  font-family: "Montserrat",sans-serif; box-size:border-box;')

container.className = 'container'
container.setAttribute('style',' max-width: 1100px; margin: 0 auto;')
row.className = 'row'
row.setAttribute('style','display: flex;')
header.className = 'header';
header.setAttribute('style','padding: 40px 0 20px;position:absolute;top:0;border-bottom: 1px solid rgba(255, 255, 255, .2); background-clip: padding-box;width:100%;')


//header

let itm = ['Главная','Наши проекты','Услуги','Новости','Контакты',]

nav.setAttribute('style','display:flex; justify-content:flex-end;')
const headerUl = ul.cloneNode();
headerUl.setAttribute('style','display:flex;list-style:none;margin: 0;')
const headerCont = container.cloneNode();

for(let i = 0; i<itm.length;i++){
    const headerItem = li.cloneNode();
    const headerLink = a.cloneNode()
    headerLink.setAttribute('style','text-decoration:none;font-weight: 500;font-size: 16px;line-height: 20px; color:white;')

    headerLink.append(itm[i])
    headerItem.append(headerLink)
    headerItem.setAttribute('style','margin-left:40px;')

    headerUl.append(headerItem)
    nav.append(headerUl)
    headerCont.append(nav)
}
header.append(headerCont,br)
document.body.append(header)

// hero

hero.className = 'hero';
hero.setAttribute('style','padding:250px 0 255px;background: url(./hero.png) no-repeat ; background-size:cover; color:white;')
const heroCont = container.cloneNode()
const heroContent = div.cloneNode()
const heroH5 = h5.cloneNode()
const heroTitle = h1.cloneNode()
const heroLink = a.cloneNode()

heroContent.setAttribute('style','text-align: center; width:80%; margin: 0 auto;')
heroH5.innerHTML = 'Передовая IT студия'
heroH5.setAttribute('style','font-weight: 500;font-size: 16px;line-height: 20px;')
heroTitle.innerHTML = 'Мы создаем легкие решения сложных задач и проблем'
heroTitle.setAttribute('style','font-weight: 800;font-size: 48px;line-height: 64px;margin:0 0 50px;padding-bottom:20px')
heroLink.innerHTML = 'Наши проекты'
heroLink.setAttribute('style','font-weight: 500;font-size: 16px;line-height: 20px;text-decoration:none;color:white;background: #4985FF;box-shadow: 0px 0px 10px rgba(111, 111, 111, 0.25);border-radius: 30px;padding: 15px 36px;')

heroContent.append(heroH5,heroTitle,heroLink)
heroCont.append(heroContent)
hero.append(heroCont)
document.body.append(hero)

// apps

apps.className ='apps';

const appsCont = container.cloneNode()
const appsRow = row.cloneNode()
const appsContent = div.cloneNode()
const appsTitle = h2.cloneNode()
const appsDescription = p.cloneNode()
const appsLink = a.cloneNode()

appsCont.setAttribute('style',' max-width: 1100px; margin: 0 auto; text-align:center')
apps.setAttribute('style','padding:110px 0;')
appsRow.setAttribute('style','display:flex;justify-content:space-between;flex-wrap:wrap;margin:70px 0 50px;')
appsTitle.innerHTML = 'Мы создаем мобильные приложениядля крупных корпораций'
appsTitle.setAttribute('style','font-weight: bold;font-size: 36px;line-height: 53px;color: #323232;margin:0 0 50px;')
appsDescription.innerHTML = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. '
appsDescription.setAttribute('style','font-weight: normal;font-size: 16px;line-height: 25px;color: #999999;margin-bottom:0;')
appsContent.setAttribute('style','width:75%; margin:0 auto; text-align:center;')
appsLink.innerHTML = 'Все услуги'
appsLink.setAttribute('style','font-weight: 500;font-size: 16px;line-height: 20px;color:white;text-decoration:none;background: #4985FF;box-shadow: 0px 0px 10px rgba(111, 111, 111, 0.25);border-radius: 30px;padding:15px 36px;')

for(let i = 0; i<3;i++){
    const appsCol = col3.cloneNode()
    const appsP = p.cloneNode()
    const appsImg = img.cloneNode()
    const appsText = div.cloneNode()
    const appsSubtitle = h5.cloneNode()

    appsImg.src = './project.svg'
    appsP.innerHTML = 'Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.'
    appsP.setAttribute('style','font-weight: normal;font-size: 14px;line-height: 22px;color: #999999;')
    appsSubtitle.innerHTML = 'Создание сайтов'
    appsSubtitle.setAttribute('style','font-weight: 600;font-size: 18px;line-height: 22px;margin:0 0 12px;')
    appsText.append(appsSubtitle,appsP)
    appsText.setAttribute('style','margin-left:30px')
    appsCol.append(appsImg,appsText)
    appsCol.setAttribute('style','display:flex; justify-content:space-between; align-items:top;width: 27%;margin-bottom:20px')
    appsRow.append(appsCol)
}

appsContent.append(appsTitle,appsDescription)
appsCont.append(appsContent,appsRow,appsLink)
apps.append(appsCont)
document.body.append(apps)

//standart 

standart.className = 'standart'

const standartCont = container.cloneNode()
const standartRow = row.cloneNode()
const standartCol1 = col5.cloneNode()
const standartCol2 = col5.cloneNode()
const standartImg = img.cloneNode()
const standartTitle = h2.cloneNode()
const standartDescription = p.cloneNode()
const standartLink = a.cloneNode()
const standartBot = row.cloneNode()

standart.setAttribute('style','padding:100px 0 50px;background: #F6F6F8;')
standartRow.setAttribute('style','display:flex; justify-content:space-between; align-items:center;padding-bottom:80px;border-bottom:1px solid rgba(0, 0, 0, 0.1);')
standartTitle.innerHTML = 'Высокие стандарты разработки'
standartTitle.setAttribute('style','font-weight: bold;font-size: 36px;line-height: 53px;color: #323232;')
standartDescription.innerHTML = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.  стандартной "рыбой" для текстов на латинице с начала XVI века. '
standartDescription.setAttribute('style','font-weight: normal;font-size: 16px;line-height: 25px;color: #999999;')
standartLink.innerHTML = 'Подробнее о компании'
standartLink.setAttribute('style','font-weight: 500;font-size: 16px;line-height: 20px;color: #4985FF;')
standartImg.src = './standart.png'
standartBot.setAttribute('style','display:flex;justify-content:space-between;flex-wrap:wrap;width:85%;margin:0 auto;padding-top:70px;')

for(let i = 0; i < 5; i++){
    const standartCol = col2.cloneNode()
    const standartSub = h5.cloneNode()
    const standarIcon = img.cloneNode()
    const standartSpan = span.cloneNode()
    const standartGroup = div.cloneNode()

    standarIcon.src = './stand.svg'
    standarIcon.setAttribute('style','margin-right:20px;')
    standartSub.innerHTML = 'Our projects'
    standartSub.setAttribute('style','font-weight: normal;font-size: 16px;line-height: 25px;color: #999999;margin: 17px 0 20px')
    standartSpan.innerHTML = '125'
    standartSpan.setAttribute('style','font-weight: normal;font-size: 36px;line-height: 53px;')
    standartGroup.setAttribute('style','display:flex;align-items:center;')

    standartGroup.append(standarIcon,standartSpan)
    standartCol.append(standartGroup,standartSub)
    standartBot.append(standartCol)
}

standartCol1.append(standartTitle,standartDescription,standartLink)
standartCol2.append(standartImg)
standartRow.append(standartCol1,standartCol2)
standartCont.append(standartRow,standartBot)
standart.append(standartCont)
document.body.append(standart)

// work

work.className = 'work';
work.setAttribute('style','padding-top:100px ;background: linear-gradient(90deg, #504DC2 20.44%, #5F12D0 80.91%), #C4C4C4; height: 50vh ;position:statick')

const workTop = div.cloneNode()
workTop.setAttribute('style','display: flex; justify-content: space-between; align-items:center;margin: 0 0 20px')
const workTitle = h2.cloneNode()
workTitle.innerHTML = 'Наши работы, на которых мы специализируемся'
workTitle.setAttribute('style','color:white; font-weight: bold;font-size: 36px;line-height: 53px;width:50%; margin: 0;')
const workService = a.cloneNode()
workService.innerHTML = 'Все услуги'
workService.setAttribute('style','text-decoration:none; padding: 15px 36px; background: #4985FF;box-shadow: 0px 0px 10px rgba(111, 111, 111, 0.25);border-radius: 30px;font-weight: 500;font-size: 16px;line-height: 20px;text-align: center;color: #FFFFFF;')
const workCont = container.cloneNode()
const workRow = row.cloneNode()
workRow.className = 'work__row'
workRow.setAttribute('style','display:flex;justify-content:space-between; flex-wrap: wrap; padding:0 0 70px;border-bottom:1px solid rgba(0, 0, 0, 0.3);')

let count = 3  
for(let i = 0; i < count; i++){
    if(count > 12){
        alert('Больше нельзя')
        count = 12;
    }
    const workCol = col4.cloneNode()
    const image = img.cloneNode();
    const title = h3.cloneNode();
    const link = a.cloneNode();
    const workP = p.cloneNode()
    
    workCol.setAttribute('style' , 'width: 31%; margin-top: 30px;')
    image.src = './Rectangle 2.png'
    title.innerHTML = ' Исследование и упаковка'
    title.setAttribute('style','margin: 30px 0')
    workP.innerHTML = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
    workP.setAttribute('style','font-weight: normal;font-size: 16px;line-height: 25px;color: #999999;margin-bottom:30px;')
    link.innerHTML = 'Подробнее'
    link.setAttribute('style', ' color: #4985FF; text-decoration:none; border-bottom:1px solid #4985FF;')

    workCol.append(image, title,workP, link)
    workRow.append(workCol)  
}

workTop.append(workTitle,workService)
workCont.append(workTop,workRow)
work.append(workCont)
document.body.append(work)

//projects

project.className = 'project'

const projectCont = container.cloneNode()
const projectTitle = h2.cloneNode()
const projectP = p.cloneNode()
const projectLink = a.cloneNode()
const projectRow = row.cloneNode()

let procent 

if(count <= 3){
    procent = 3*10;
} else if(count <= 6) {
    procent = 3*22;
}else if(count <= 9) {
    procent = 3*35;
}else if(count <= 12) {
    procent = 3*47;
}else {
    procent = 3*47;
}

project.setAttribute('style','padding:100px 0;background: #F6F6F8;')
project.style.marginTop = procent+'%';
projectCont.setAttribute('style',' max-width: 1100px; margin: 0 auto;text-align:center;')
projectRow.setAttribute('style','display:flex;justify-content:space-between;flex-wrap:wrap;margin-bottom:50px;')
projectTitle.innerHTML = 'Наши проекты'
projectTitle.setAttribute('style','font-weight: bold;font-size: 36px;line-height: 53px;margin-top:0;')
projectP.innerHTML = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. '
projectP.setAttribute('style','font-weight: normal;font-size: 16px;line-height: 25px;color: #999999;margin-bottom:70px')
projectLink.innerHTML = 'Все проекты'
projectLink.setAttribute('style','text-decoration:none; padding: 15px 36px; background: #4985FF;box-shadow: 0px 0px 10px rgba(111, 111, 111, 0.25);border-radius: 30px;font-weight: 500;font-size: 16px;line-height: 20px;color: #FFFFFF;')

for(let i = 0;i < 4; i++){
    const projectCol = col3.cloneNode()
    const projectImg = img.cloneNode()

    projectImg.src = './pro.png'

    projectCol.append(projectImg)
    projectCol.setAttribute('style','margin-bottom:20px;')
    projectRow.append(projectCol)
}

projectCont.append(projectTitle,projectP,projectRow,projectLink)
project.append(projectCont)
document.body.append(project)

// video 

video.className = 'video'

const videoTitle = h2.cloneNode()
const videoP = p.cloneNode()
const videoFrame = iframe.cloneNode()
const videoIcon = img.cloneNode()
const videoCont = container.cloneNode()
const videoTop = div.cloneNode()

video.setAttribute('style','background: url(./vibg.png) no-repeat ; background-size:cover;padding-top:70px;height:60vh')
videoTop.setAttribute('style','text-align:center;')
videoTitle.innerHTML = 'Видео о нашей работе'
videoTitle.setAttribute('style','font-weight: bold;font-size: 36px;line-height: 53px;color: #fff;margin:0')
videoP.innerHTML = 'Просто посмотрите, как мы работаем'
videoP.setAttribute('style','font-weight: normal;font-size: 16px;line-height: 25px;color: #FFFFFF;margin-bottom:70px')
videoFrame.src = "https://www.youtube.com/embed/E_Gweky2WF8" 
videoFrame.setAttribute('style','width:80%;height:400px; border:none;border-radius:10px;')
videoIcon.src = './play-button.svg'


videoTop.append(videoTitle,videoP,videoFrame)
videoCont.append(videoTop)
video.append(videoCont)
document.body.append(video)

// sub

sub.className = 'sub'

const subCont = container.cloneNode()
const subCenter = div.cloneNode()
const subTitle = h2.cloneNode()
const subDes = p.cloneNode()
const subInput = input.cloneNode()
const subBtn = btn.cloneNode()
const subP = p.cloneNode()
const subLabel = label.cloneNode()

subCenter.setAttribute('style','text-align:center;padding-top: 70px;border-top: 1px solid rgba(0,0,0,0.3);')
sub.setAttribute('style','padding:160px 0 85px;')
subTitle.innerHTML = 'Подпишитесь на нашу рассылку'
subTitle.setAttribute('style','margin:0;font-weight: 600;font-size: 18px;line-height: 22px;')
subDes.innerHTML = 'Полезные статьи, акции, новости - получите все это сейчас!'
subDes.setAttribute('style','font-weight: normal;font-size: 16px;line-height: 25px;color:#999999;')
subInput.setAttribute('style','background: #fFF;box-shadow: 0px 0px 10px rgba(111, 111, 111, 0.25);border-radius: 30px 0px 0px 30px;padding:15px 36px;outline:none;border:none;width:20%;color:#999;font-weight: normal;font-size: 13px;line-height: 21px;margin:15px 0 35px')
subInput.placeholder = ' Ваш e-mail'
subBtn.innerHTML = 'Подписаться'
subBtn.setAttribute('style','background: #4985FF;box-shadow: 0px 0px 10px rgba(111, 111, 111, 0.25);border-radius: 0px 30px 30px 0px;padding:15px 36px; outline:none;border:none;color:#fff;font-weight: 500;font-size: 16px;line-height: 20px;cursor:pointer')
subP.innerHTML = 'Мы не шлем спам, и передаем никому ваши данные.'
subP.setAttribute('style','font-weight: normal;font-size: 16px;line-height: 25px;color:#999999;')

subLabel.append(subInput,subBtn)
subCenter.append(subTitle,subDes,subLabel,subP)
subCont.append(subCenter)
sub.append(subCont)
document.body.append(sub)

// footer 

footer.className = 'footer'
let footerList1 = ['Основные ссылки','>  Главная','>  Наши проекты','>  Наши услуги','>  Контакты']
let footerList2 = ['Наши проекты','>  РосНано','>  Сколково','>  Проект “Восток”','>  ТЭЦ Калининграда']
let footerList3 = ['Социальные сети','>  VK.com','>  Instagram','>  Facebook','>  Twitter']
let footerSocial = ['Контактная информация','test@test.ru','+8 777 555 66 99','Москва, Бульвар Ленина 33']

const footerCont = container.cloneNode()
const footerRow = row.cloneNode()
const footer1 = ul.cloneNode()
const footer2 = ul.cloneNode()
const footer3 = ul.cloneNode()
const footerSo = ul.cloneNode()
const footerBot = p.cloneNode()

footerBot.innerHTML = '(с) 2019. Все права защищены.'
footerBot.setAttribute('style','font-weight: normal;font-size: 13px;line-height: 21px;text-align: center;color:#999;margin-top:30px')
footer.setAttribute('style','background: #F6F6F8;padding:70px 0 20px')
footerRow.setAttribute('style','display:flex;justify-content:space-around;border-bottom:1px solid rgba(0,0,0, 0.1)')
footer1.setAttribute('style','list-style:none;')
footer2.setAttribute('style','list-style:none;')
footer3.setAttribute('style','list-style:none;')
footerSo.setAttribute('style','list-style:none;')

for(let i = 0;i < footerSocial.length; i++){
    const footerItem = li.cloneNode()
    const footerLink3 = a.cloneNode()

    if(i===0){
        footerItem.innerHTML = footerSocial[i]
        footerItem.setAttribute('style','font-weight: 600;font-size: 18px;line-height: 22px;margin-bottom:35px')
    }else{
        footerLink3.innerHTML = footerSocial[i]
        footerLink3.setAttribute('style','font-weight: normal;font-size: 14px;line-height: 22px;color:#999;text-decoration:none;')
        footerItem.append(footerLink3)
        footerItem.setAttribute('style','margin-bottom:25px')
    }

    footerSo.append(footerItem)
}

for(let i = 0;i < footerList1.length; i++){
    const footerItem1 = li.cloneNode()
    const footerLink = a.cloneNode()

    if(i===0){
        footerItem1.innerHTML = footerList1[i]
        footerItem1.setAttribute('style','font-weight: 600;font-size: 18px;line-height: 22px;margin-bottom:35px')
    }else{
        footerLink.innerHTML = footerList1[i]
        footerLink.setAttribute('style','font-weight: normal;font-size: 14px;line-height: 22px;color:#999;text-decoration:none;')
        footerItem1.append(footerLink)
        footerItem1.setAttribute('style','margin-bottom:25px')
    }

    footer1.append(footerItem1)
}


for(let i = 0;i < footerList2.length; i++){
    const footerItem2 = li.cloneNode()
    const footerLink1 = a.cloneNode()

    if(i===0){
        footerItem2.innerHTML = footerList2[i]
        footerItem2.setAttribute('style','font-weight: 600;font-size: 18px;line-height: 22px;margin-bottom:35px')
    }else{
        footerLink1.innerHTML = footerList2[i]
        footerLink1.setAttribute('style','font-weight: normal;font-size: 14px;line-height: 22px;color:#999;text-decoration:none;')
        footerItem2.append(footerLink1)
        footerItem2.setAttribute('style','margin-bottom:25px')
    }

    footer2.append(footerItem2)
}


for(let i = 0;i < footerList3.length; i++){
    const footerItem3 = li.cloneNode()
    const footerLink2 = a.cloneNode()

    if(i===0){
        footerItem3.innerHTML = footerList3[i]
        footerItem3.setAttribute('style','font-weight: 600;font-size: 18px;line-height: 22px;margin-bottom:35px')
    }else{
        footerLink2.innerHTML = footerList3[i]
        footerLink2.setAttribute('style','font-weight: normal;font-size: 14px;line-height: 22px;color:#999;text-decoration:none;')
        footerItem3.append(footerLink2)
        footerItem3.setAttribute('style','margin-bottom:25px')
    }

    footer3.append(footerItem3)
}



footerRow.append(footerSo,footer1,footer2,footer3)
footerCont.append(footerRow,footerBot)
footer.append(footerCont)
document.body.append(footer)
