import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfolioURL = 'https://caleb-okkers.github.io/first_api/data/'

export default createStore({
  state: {
    education: null,
    aboutMe: null,
    work: null,
    projects: null,
    testimonials: null,
    skills: null
  },
  getters: {
  },
  mutations: {
    setJobTitle(state, payload) {
      state.jobTitle = payload
    },
    setAboutMe(state, payload) {
      state.aboutMe = payload
    },
    setEducation(state,payload) {
      state.education = payload
    },
    setWork(state,payload) {
      state.education = payload
    },
    setProjects(state,payload) {
      state.work = payload
    },
    setTestimonials(state,payload) {
      state.testimonials = payload
    },
    setSkills(state,payload) {
      state.skills = payload
    }
  },
  actions: {
    async getJobTitle(context){
      try {
        let {jobTitle} = await (await axios.get(portfolioURL)).results
        context.commit('setJobTitle', jobTitle)
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getAboutMe(context){
      try {
        let {aboutMe} = await (await axios.get(portfolioURL)).results
        context.commit('setAboutMe', aboutMe)
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
      // let converted = await fetchedInfo.json()
      // console.log(converted.aboutMe);
      // context.commit('setAboutMe', converted.aboutMe)
    },
    async getEducation(context){
      try {
        let {education} = await (await axios.get(portfolioURL)).results
        context.commit('setEducation', education)
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getWork(context){
      try {
        let {work} = await (await axios.get(portfolioURL)).results
        context.commit('setWork', work)
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getSkills(context){
      try {
        let {skills} = await (await axios.get(portfolioURL)).results
        context.commit('setSkills', skills )
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getProjects(context){
      try {
        let {projects} = await (await axios.get(portfolioURL)).results
        context.commit('setProjects', projects)
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async getTestimonials(context){
      try {
        let {testimonials} = await (await axios.get(portfolioURL)).results
        context.commit('setTestimonials', testimonials)
      }catch(e) {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    }
    









    // async getEducation(context){
    //   let fetchedInfo = await fetch('https://caleb-okkers.github.io/first_api/data/')
    //   let converted = await fetchedInfo.json()
    //   // console.log(converted.education);
    //   context.commit('setEducation', converted.education)
    // },
    // async getWork(context){
    //   let fetchedInfo = await fetch('https://caleb-okkers.github.io/first_api/data/')
    //   let converted = await fetchedInfo.json()
    //   // console.log(converted.work);
    //   context.commit('setWork', converted.work)
    // },
    // async getSkills(context){
    //   let fetchedInfo = await fetch('https://caleb-okkers.github.io/first_api/data/')
    //   let converted = await fetchedInfo.json()
    //   // console.log(converted.skills);
    //   context.commit('setSkills', converted.skills)
    // },
    // async getProjects(context){
    //   let fetchedInfo = await fetch('https://caleb-okkers.github.io/first_api/data/')
    //   let converted = await fetchedInfo.json()
    //   // console.log(converted.projects);
    //   context.commit('setProjects', converted.projects)
    // },
    // async getTestimonials(context){
    //   let fetchedInfo = await fetch('https://caleb-okkers.github.io/first_api/data/')
    //   let converted = await fetchedInfo.json()
    //   // console.log(converted.testimonials);
    //   context.commit('setTestimonials', converted.testimonials)
    // }
  },
  modules: {
  }
})
