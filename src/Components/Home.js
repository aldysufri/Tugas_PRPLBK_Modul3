import { Component } from "react";
import React from "react";
import Kemeja from "./Kemeja";
import Kaos from "./Kaos";

class Home extends Component {
    state = {
        komponen1: false,
        komponen2: false,
    }
      componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Happy Shopping`)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('SELAMAT DATANG :)');
    }
    ubahkomponen1 = () => {
        this.setState((state) => {
            return { komponen1: !this.state.komponen1 }
        })
    }
    ubahkomponen2 = () => {
        this.setState((state) => {
            return { komponen2: !this.state.komponen2 }
        })
    }
    render() {
        return (
            <div>
                {this.state.komponen1 ? <Kaos /> : ''}
                <button className="Button"  onClick={this.ubahkomponen1}>{this.state.komponen1 ? 'HIDE' : 'SHOW'} Daftar Kaos </button>
                <div style={{ border: "0.5px solid black", margin: 20 }}>
                </div>
                {this.state.komponen2 ? <Kemeja /> : ''}
                <button className="Button"  onClick={this.ubahkomponen2}>{this.state.komponen2 ? 'HIDE' : 'SHOW'} Daftar Kemeja</button>
            </div>
        );
    }
}
export default Home;