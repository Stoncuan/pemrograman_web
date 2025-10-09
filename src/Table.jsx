import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "./utils/constant.js";

// import data icon yang ada di react icon
import {} from "react-icons/fa";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categories: [],
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

    axios
      .get(API_URL + "categories")
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log("Error yaa", error);
      });
  }

  render() {
    const { menus, categories } = this.state;

    return (
      <div className="container mt-4">
        <div>
          {categories.map((kategori) => (
            <button key={kategori.id}>{kategori.nama}</button>
          ))}
        </div>
        <h3 className="mb-3">List Data Produk</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama Produk</th>
              <th>Gambar</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            {menus.length > 0 ? (
              menus.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nama}</td>
                  <td>
                    <img
                      src={`/images/${item.gambar}`}
                      alt={item.nama}
                      width="80"
                      height="80"
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                  </td>
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
