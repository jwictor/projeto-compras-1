// export const isAuthenticated = () => !!localStorage.getItem('access_token');

// export default isAuthenticated;

export const isAuthenticated = () => {
    // Lógica para verificar se o usuário está autenticado
    return !!localStorage.getItem('access_token');
  };