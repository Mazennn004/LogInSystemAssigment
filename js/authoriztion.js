if(location.pathname=='/html/home.html'&&localStorage.getItem('sessionName')==''){
    location.pathname='/index.html';
    console.log('working');
    
}