import React from "react";
import { Table } from "react-bootstrap";

export default function MahasiswaTable() {
  const data = [
    { id: 1, nama: "Andi", jurusan: "Informatika", angkatan: 2022 },
    { id: 2, nama: "Budi", jurusan: "Sistem Informasi", angkatan: 2021 },
    { id: 3, nama: "Citra", jurusan: "Teknik Komputer", angkatan: 2023 },
  ];

  return (
    <div className="container mt-4">
      <h3 className="mb-3">List Data</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Daftar Kategori</th>
            <th></th>
            <th>Hasil</th>
          </tr>
        </thead>
        <tbody>
          {data.map((mhs) => (
            <tr key={mhs.id}>
              <td> 1</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
