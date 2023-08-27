import React, {useState, useEffect, useContext} from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import api from "../../api-config/axiosConfig";
import '../../CssCollection/ComponentsCss/scanner.css'
import AuthContext from "../../Context/AuthProvider.js";

const initialState = {"roomNumber": 0, "trashType": ""};

function Scanner() {
    const [scanResult, setScanResult] = useState(initialState);
    const { auth } = useContext(AuthContext);
    
    useEffect(() => {
        const scanner = new Html5QrcodeScanner(
            'reader',
            {
                qrbox: {
                    width: 300,
                    height: 300
                },
                fps: 60
            },
        );
        
        scanner.render(success, error);
        
        function success(result) {
            scanner.clear().then(() => setScanResult(JSON.parse(result)));
        }
        
        function error(err) {
            // console.log(err);
        }
    }, [])
    
    const handleSubmit = async () => {
        try {
            const response = await api.put(`/management/daily/${scanResult.roomNumber}/${scanResult.trashType}`)
            setScanResult(initialState);
            console.log(response.status);
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }
    
    return (
        <div className={"qr-scanner"}>
            <h1>Scan QR Code</h1>
            {
                (scanResult !== initialState) ? (
                    <div>
                        Room Number: {scanResult.roomNumber}<br/>
                        Trash Type: {scanResult.trashType}
                        <button onClick={handleSubmit}>Confirm</button>
                    </div>
                ) : (
                    <div id={"reader"}></div>
                )
            }
        </div>
    )
}

export default Scanner;