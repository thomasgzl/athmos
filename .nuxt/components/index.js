export { default as VImg } from '../../components/global/VImg.vue'
export { default as ScrollToTop } from '../../components/ScrollToTop.vue'
export { default as TheBlogs } from '../../components/TheBlogs.vue'
export { default as TheContact } from '../../components/TheContact.vue'
export { default as TheHeader } from '../../components/TheHeader.vue'
export { default as TheHonors } from '../../components/TheHonors.vue'
export { default as TheProfile } from '../../components/TheProfile.vue'
export { default as TheProjectItem } from '../../components/TheProjectItem.vue'
export { default as TheSkills } from '../../components/TheSkills.vue'
export { default as TheWorks } from '../../components/TheWorks.vue'

export const LazyVImg = import('../../components/global/VImg.vue' /* webpackChunkName: "components/v-img" */).then(c => c.default || c)
export const LazyScrollToTop = import('../../components/ScrollToTop.vue' /* webpackChunkName: "components/scroll-to-top" */).then(c => c.default || c)
export const LazyTheBlogs = import('../../components/TheBlogs.vue' /* webpackChunkName: "components/the-blogs" */).then(c => c.default || c)
export const LazyTheContact = import('../../components/TheContact.vue' /* webpackChunkName: "components/the-contact" */).then(c => c.default || c)
export const LazyTheHeader = import('../../components/TheHeader.vue' /* webpackChunkName: "components/the-header" */).then(c => c.default || c)
export const LazyTheHonors = import('../../components/TheHonors.vue' /* webpackChunkName: "components/the-honors" */).then(c => c.default || c)
export const LazyTheProfile = import('../../components/TheProfile.vue' /* webpackChunkName: "components/the-profile" */).then(c => c.default || c)
export const LazyTheProjectItem = import('../../components/TheProjectItem.vue' /* webpackChunkName: "components/the-project-item" */).then(c => c.default || c)
export const LazyTheSkills = import('../../components/TheSkills.vue' /* webpackChunkName: "components/the-skills" */).then(c => c.default || c)
export const LazyTheWorks = import('../../components/TheWorks.vue' /* webpackChunkName: "components/the-works" */).then(c => c.default || c)
