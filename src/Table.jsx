import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "./utils/constant.js";

// import data icon yang ada di react icon
import {} from "react-icons/fa"

const Icon = ({}) => {
  if(nama === "Makanan") return <FaUtensils className="mr-2"/>
  if(nama === "Minuman") return <FaUtensils className="mr-2"/>
  if(nama === "Cemilan") return <FaUtensils className="mr-2"/>
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products")
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log("Error yaa", error);
      });
    
  }

  render() {
    const { menus } = this.state;
    

    console.log(kategori);

    return (
      <div className="container mt-4">
        <h3 className="mb-3">List Data Produk</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama Produk</th>
              <th>Kategori</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            {menus.length > 0 ? (
              menus.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nama}</td>
                  <td>{item.kategori?.nama || "-"}</td>
                  <td>{item.harga}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  Loading data...
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}
