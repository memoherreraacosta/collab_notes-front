export const isAuthenticated = () => {
    return (document.cookie.indexOf('id') != -1)
  }
  
export default isAuthenticated;
