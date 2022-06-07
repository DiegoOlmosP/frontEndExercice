const getApi = async () => {

    try{
        const response = await fetch('https://api-football-standings.azharimm.site/leagues');
        const payload = await response.json();        
        let list = payload.data;
        list = list.map(item => ({
          name: item.name,
          image: item.logos.light,
        }));
        return list;
    }catch(error){
      console.log(error)
    }
};

document.getElementById('boton').addEventListener('click', (event) => {

    const data = getApi();
    data.then(array => {
        array.forEach((item) => {
          console.log(item.name + " ---- " + item.image);

        })
      })
  })