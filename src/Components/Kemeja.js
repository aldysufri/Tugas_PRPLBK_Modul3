import React, { Component } from "react";
const Data = [
{
      "name": "Kemeja Putih Pendek",
      "image": "https://source.unsplash.com/9QW52RyBLao/230x230",
      "des": "velit leo tempus purus",
      "harga": "Rp.100.000.00-,"
    },
    {
      "name": "Kemeja Biru Kotak",
      "image": "https://source.unsplash.com/mEBXaipoUmg/230x230",
      "des": "velit leo tempus purus",
      "harga": "Rp.100.000.00-,"
    },
    {
      "name": "Kemeja Biru",
      "image": "https://source.unsplash.com/2O1EUSTRBrY/230x230",
      "des": "velit leo tempus purus",
      "harga": "Rp.100.000.00-,"
    },
    {
      "name": "Kemeja Putih Corak",
      "image": "https://source.unsplash.com/YJN7eCPiCPc/230x230",
      "des": "velit leo tempus purus",
      "harga": "Rp.100.000.00-,"
    },
    ]
class Kemeja extends Component {  
    state = {
        internet: " "
    }
    componentDidMount(){
        alert('Show Kemeja! (Proses mount)')
    }

  componentWillUnmount(){
        alert('Hide Fashion (Proses Unmount)!')
  }
  
    render() {
        return (
          <div>
            <h2>Daftar Kemeja</h2>
              <div className="center">
                {Data.map((p) => (
                <div className="property-card">
                    <div className="property-image" style={{ backgroundImage: `url(${p.image})`}}>
                    <div className="property-image-title" >
                        </div>
                    </div>
                    <div className="property-description">
                    <h5 style={{ color:"#a265e7" }}> {p.name} </h5>
                        <p>{ p.des }</p>
                        <p>{ p.harga }</p>
                    </div>
                </div>
                ))}
              </div>
                <br />
                <p>{this.state.internet}</p>
            </div>
        );
    }
}
export default Kemeja;