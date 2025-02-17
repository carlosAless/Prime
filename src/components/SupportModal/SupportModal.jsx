import React from "react";
import "./SupportModal.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const SupportModal = ({ onClose, setOpenSupport }) => {
  const handleDownload = (url, software) => {
    window.location.href = url;
    Swal.fire({
      title: "Download iniciado!",
      text: `O download do ${software} foi iniciado.`,
      icon: "success",
      confirmButtonText: "OK",
      timer: 3000,
      toast: true,
      position: "top-end",
      showConfirmButton: false,
    });
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Download de Software de Suporte</h2>
        <p>Escolha uma das opções para baixar o software de suporte:</p>
        <div className="btns">
          <button
            onClick={() => {
              handleDownload(
                "https://customdesignservice.teamviewer.com/download/windows/v13/zxbs338/TeamViewerQS.exe",
                "TeamViewer"
              );
              setOpenSupport(false);
            }}
          >
            <img
              src="https://www.teamviewer.com/etc.clientlibs/teamviewer/clientlibs/clientlib-resources/resources/favicon.png"
              alt=""
              style={{ width: "32px" }}
            />
            Baixar TeamViewer
          </button>

          <button
            onClick={() => {
              handleDownload(
                "https://download.anydesk.com/AnyDesk.exe",
                "AnyDesk"
              );
              setOpenSupport(false);
            }}
          >
            <img
              src="https://anydesk.com/_static/img/favicon/favicon-32x32.png"
              alt=""
            />
            Baixar AnyDesk
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportModal;
