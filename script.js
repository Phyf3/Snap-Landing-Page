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
const featuresList = document.querySelector('#feature_list')
const closeFeatures = document.querySelector('#close_features')

openFeatures.addEventListener('click', () => {
    if(featuresList.classList.contains('hidden')) {
        featuresList.classList.remove('hidden')
        openFeatures.classList.add('hidden')
        closeFeatures.classList.remove('hidden')
    }
})

closeFeatures.addEventListener('click', () => {
    if(!featuresList.classList.contains('hidden')) {
        featuresList.classList.add('hidden')
        openFeatures.classList.remove('hidden')
        closeFeatures.classList.add('hidden')
    }
})

const openCompanyList = document.querySelector('#open_company');
const companyList = document.querySelector('#company_list')
const closeCompanyList = document.querySelector('#close_company')

openCompanyList.addEventListener('click', () => {
    if(companyList.classList.contains('hidden')) {
        companyList.classList.remove('hidden')
        openCompanyList.classList.add('hidden')
        closeCompanyList.classList.remove('hidden')
    }
})

closeCompanyList.addEventListener('click', () => {
    if(!companyList.classList.contains('hidden')) {
        companyList.classList.add('hidden')
        openCompanyList.classList.remove('hidden')
        closeCompanyList.classList.add('hidden')
    }
})