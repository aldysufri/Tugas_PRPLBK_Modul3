import React, { Component } from "react";

const Data = [
{
      "name": "Kaos Hijau Polos",
      "image": "https://source.unsplash.com/xPJYL0l5Ii8/230x230",
      "des": "velit leo tempus purus",
      "harga": "Rp.50.000.00-,"
    },
    {
      "name": "Kaos Hitam",
      "image": "https://source.unsplash.com/FoF0w-d6Z74/230x230",
      "des": "velit leo tempus purus",
      "harga": "Rp.50.000.00-,"
    },
    {
      "name": "Kaos Pantai Putih",
      "image": "https://source.unsplash.com/9ShY-Tq70Mc/230x230",
      "des": "velit leo tempus purus",
      "harga": "Rp.50.000.00-,"
    },
    {
      "name": "Kaos Biru Muda",
      "image": "https://source.unsplash.com/AqLIkOzWDAk/230x230",
      "des": "velit leo tempus purus",
      "harga": "Rp.50.000.00-,"
    },
    ]
class Kaos extends Component {
    state = {
        isi: 0
    }
     componentDidMount(){
        alert('Show Kaos! (Proses mount)')
}
    tambahisi = () => {
        this.setState((state) => { return { isi: state.isi + 1 } })
    }
    kurangiisi = () => {
        this.setState((state) => { return { isi: state.isi - 1} })
    }
    componentWillUnmount(){
        alert('Hide Kaos gan (Unmount)!')
    }
    render() {
        return (
          <div>
            <h2>Daftar Kaos</h2>
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
            <div>
                  <h5>Jumlah Pesanan</h5>
                <button className="Button" onClick={this.tambahisi}>Tambah</button>
                <button className="Button" onClick={this.kurangiisi}>Kurang</button>
            <br />
                <p className="title">{this.state.isi}</p>
            </div>
            </div>
        );
    }
}
export default Kaos;