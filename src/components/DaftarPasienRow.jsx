import React from 'react';
import { Link } from "react-router-dom";

export const DaftarPasienRow = (props) => {
    return (
        <tbody>
            {props.listPasien.map(pasien => {
                return (
                    <tr key={pasien.id}>
                        <td>{pasien.nama}</td>
                        <td>{pasien.statusPasien.jenis}</td>
                        <td>
                            <Link to={`/update-pasien/${pasien.id}`} className="btn btn-info">Update</Link>
                        </td>
                        <td>
                            <Link to={`/hasil-pasien/${pasien.id}`} className="btn btn-info">Show Hasil Lab</Link>
                        </td>

                    </tr>
                )
            })}
        </tbody>
    )
}