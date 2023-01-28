import React, { Component } from 'react'

export default class fileupload extends Component {

constructor(){
    super()
    this.state = {
        color : 'red',
        arrayofImages : [],
        storeimg : [],
        samplearr : [{
            a : 'fsdf',
            b : 'fsdf'
        }]
    }
}


 uploadImage = async (e) => {
    for(var i = 0 ; i<e.target.files.length; i++){
      const file = e.target.files[i];
      var base64 = await this.convertBase64(file);
        this.state.storeimg.push(base64)
          this.setState({
        arrayofImages : [ ...this.state.arrayofImages , base64]
    })

    }
  


    this.setState({
        color : 'black'  
    })

    console.log(base64);
    console.log(this.state.arrayofImages);
  
  };
   


     convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
    
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
    
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };


  render() {

    const {color} = this.state

    return (
        <>
        <p>fileupload {color}</p>
        <input type='file' multiple  onChange={(e) => this.uploadImage(e)} />
        {JSON.stringify(this.state.arrayofImages)}
        {this.state.arrayofImages.map((e,i) => {
            return(
                <img key={i} src={e} />
            )
        })}
        </>
    )
  }
}
