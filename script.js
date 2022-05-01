const openBtn = document.querySelector('#menu_open');
const closeBtn = document.querySelector('#menu_close');
const sidebar = document.querySelector('#sidebar')

openBtn.addEventListener('click', () => {
    if(sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
    } 
})

closeBtn.addEventListener('click', () => {
    if(!sidebar.classList.contains('hidden')) {
        sidebar.classList.add('hidden');
    } 
})

const openFeatures = document.querySelector('#open_features');
const closeFeatures = document.querySelector('#close_features')

const openFeaturesMD = document.querySelector('#open_features--md');
const closeFeaturesMD = document.querySelector('#close_features--md')

const featuresList = document.querySelector('#feature_list')
const featuresListMD = document.querySelector('#feature_list--md')

const featureTxt = document.querySelector('#header_feature_span');

const openFeatureList = () => {
    if(featuresList.classList.contains('hidden')) {
        featuresList.classList.remove('hidden')
        openFeatures.classList.add('hidden')
        closeFeatures.classList.remove('hidden')
    } else {
        featuresList.classList.add('hidden')
        openFeatures.classList.remove('hidden')
        closeFeatures.classList.add('hidden')
    }
}

const closeFeaturesList = () => {
    if(!featuresList.classList.contains('hidden')) {
        featuresList.classList.add('hidden')
        openFeatures.classList.remove('hidden')
        closeFeatures.classList.add('hidden')
    }
}

openFeatures.addEventListener('click', openFeatureList);
closeFeatures.addEventListener('click', closeFeaturesList)


const openFeatureListMobile = () => {
    if(featuresList.classList.contains('hidden')) {
        featuresListMD.classList.remove('hidden')
        openFeaturesMD.classList.add('hidden')
        closeFeaturesMD.classList.remove('hidden')
    } else {
        featuresListMD.classList.add('hidden')
        openFeaturesMD.classList.remove('hidden')
        closeFeaturesMD.classList.add('hidden')
    }
}

const closeFeaturesListMobile = () => {
    if(!featuresListMD.classList.contains('hidden')) {
        featuresListMD.classList.add('hidden')
        openFeaturesMD.classList.remove('hidden')
        closeFeaturesMD.classList.add('hidden')
    }
}

openFeaturesMD.addEventListener('click', openFeatureListMobile);
closeFeaturesMD.addEventListener('click', closeFeaturesListMobile)

featureTxt.addEventListener('click', openFeatureList);
// featureTxt.addEventListener('mouseenter', openFeatureList)
// featureTxt.addEventListener('mouseleave', closeFeaturesList)

//for desktop -- because id's are unique and can only be used once
const openCompany = document.querySelector('#open_company');
const closeCompany = document.querySelector('#close_company')

const openCompanyMD = document.querySelector('#open_company--md');
const closeCompanyMD = document.querySelector('#close_company--md')
const companyListMD = document.querySelector('#company_list--md')



const companyList = document.querySelector('#company_list')
const companyTxt = document.querySelector('#header_company_span')

const openCompanyList = () => {
    if(companyList.classList.contains('hidden')) {
        companyList.classList.remove('hidden')
        openCompany.classList.add('hidden')
        closeCompany.classList.remove('hidden')
    } else {
        companyList.classList.add('hidden')
        openCompany.classList.remove('hidden')
        closeCompany.classList.add('hidden')
    }
}

const closeCompanyList = () => {
    if(!companyList.classList.contains('hidden')) {
        companyList.classList.add('hidden')
        openCompany.classList.remove('hidden')
        closeCompany.classList.add('hidden')
    }
}
openCompany.addEventListener('click', openCompanyList)
closeCompany.addEventListener('click', closeCompanyList)

const openCompanyListMobile = () => {
    if(companyListMD.classList.contains('hidden')) {
        companyListMD.classList.remove('hidden')
        openCompanyMD.classList.add('hidden')
        closeCompanyMD.classList.remove('hidden')
    } else {
        companyListMD.classList.add('hidden')
        openCompanyMD.classList.remove('hidden')
        closeCompanyMD.classList.add('hidden')
    }
}

const closeCompanyListMobile = () => {
    if(!companyListMD.classList.contains('hidden')) {
        companyListMD.classList.add('hidden')
        openCompanyMD.classList.remove('hidden')
        closeCompanyMD.classList.add('hidden')
    }
}

openCompanyMD.addEventListener('click', openCompanyListMobile)
closeCompanyMD.addEventListener('click', closeCompanyListMobile)


companyTxt.addEventListener('click',openCompanyList );

// companyTxt.addEventListener('mouseenter',openCompanyList );
// companyTxt.addEventListener('mouseleave', closeCompanyList)

// // 
// // var rule = CSSRulePlugin.getRule(".s::after"); //get the rule
// // gsap.to(rule, {duration: 3, cssRule: {backgroundColor: "blue"}});


// gsap.registerPlugin(CSSRulePlugin);
// var rule = CSSRulePlugin.getRule(".s::sfter"); //get the rule
// gsap.to(rule, {cssRule:{scaleY:0}, duration:1})



gsap.from('.anim', {
    opacity:0,
    duration:2,
    y: -50,
    stagger:0.4
});

const tl = gsap.timeline();

tl.from(".main_info_title--lg span", 2, {
    opacity:0,
    y: -100,
    ease: "power4.out",
   
    skewY: 7,
    stagger: {
    amount: 0.4
  }
})



gsap.from('.hero--desktop', {
    opacity:0,
    duration:2,
    y:150,

})
