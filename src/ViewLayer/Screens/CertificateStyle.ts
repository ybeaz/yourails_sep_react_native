import { createGlobalStyle } from 'styled-components'

export const CertificateStyledGlob = createGlobalStyle`
.Certificate {
  text-align: center;

  .cursive {
    font-family: 'Pinyon Script', cursive;
  }

  .sans {
    font-family: 'Open Sans', sans-serif;
  }

  .bold {
    font-weight: bold;
  }

  .block {
    display: block;
  }

  .underline {
    border-bottom: 1px solid #777;
    padding: 5px;
    margin-bottom: 15px;
  }

  .margin-0 {
    margin: 0;
  }

  .padding-0 {
    padding: 0;
  }

  .pm-empty-space {
    height: 40px;
    width: 100%;
  }

  body {
    padding: 20px 0;
    background: #ccc;
  }

  .pm-certificate-container {
    position: relative;
    width: 800px;
    height: 600px;
    background-color: #618597;
    padding: 30px;
    color: #333;
    font-family: 'Open Sans', sans-serif;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    background: -webkit-repeating-linear-gradient(
      45deg,
      #618597,
      #618597 1px,
      #b2cad6 1px,
      #b2cad6 2px
    );
    background: repeating-linear-gradient(
      90deg,
      #618597,
      #618597 1px,
      #b2cad6 1px,
      #b2cad6 2px
    );

    .outer-border {
      width: 794px;
      height: 594px;
      position: absolute;
      left: 50%;
      margin-left: -397px;
      top: 50%;
      margin-top: -297px;
      border: 2px solid #fff;
    }

    .inner-border {
      width: 730px;
      height: 530px;
      position: absolute;
      left: 50%;
      margin-left: -365px;
      top: 50%;
      margin-top: -265px;
      border: 2px solid #fff;
    }

    .pm-certificate-border {
      position: relative;
      width: 720px;
      height: 520px;
      padding: 0;
      border: 1px solid #e1e5f0;
      background-color: rgba(255, 255, 255, 1);
      background-image: none;
      left: 50%;
      margin-left: -360px;
      top: 50%;
      margin-top: -260px;

      .pm-certificate-block {
        width: 650px;
        height: 200px;
        position: relative;
        left: 50%;
        margin-left: -325px;
        top: 70px;
        margin-top: 0;
      }

      .pm-certificate-header {
        margin-bottom: 10px;
      }

      .pm-certificate-title {
        position: relative;
        top: 40px;

        h2 {
          font-family: 'Pinyon Script', cursive;
          font-size: 34px !important;
        }
      }

      .pm-certificate-body {
        padding: 20px;

        .pm-name-text {
          font-size: 20px;
        }
      }

      .pm-earned {
        margin: 15px 0 20px;
        .pm-earned-text {
          font-size: 20px;
        }
        .pm-credits-text {
          font-size: 15px;
        }
      }

      .pm-course-title {
        .pm-earned-text {
          font-size: 20px;
        }
        .pm-credits-text {
          font-size: 15px;
        }
      }

      .pm-certified {
        font-size: 12px;

        .underline {
          margin-bottom: 5px;
        }
      }

      .pm-certificate-footer {
        width: 650px;
        height: 100px;
        position: relative;
        left: 50%;
        margin-left: -325px;
        bottom: -105px;
      }
    }
  }
}
`

export const CertificateStyledString = `
* {
  font-family: Roboto, Noto, sans-serif;
  box-sizing: border-box;
  background-clip: content-box;
  margin: 0;
  -webkit-print-color-adjust: exact;
}

@media print {
   @page {
     margin-top: 0;
     margin-bottom: 0;
   }
   body  {
     padding-top: 5rem;
     padding-bottom: 5rem;
   }
}

.Certificate {
  text-align: center;
}
.Certificate__course_code {
  font-size: 12px;
}
.Certificate .cursive {
  font-family: 'Pinyon Script', cursive;
}
.Certificate .sans {
  font-family: 'Open Sans', sans-serif;
}
.Certificate .bold {
  font-weight: bold;
}
.Certificate .block {
  display: block;
}
.Certificate .underline {
  border-bottom: 1px solid #777;
  padding: 5px;
  margin-bottom: 15px;
}
.Certificate .margin-0 {
  margin: 0;
}
.Certificate .padding-0 {
  padding: 0;
}
.Certificate .pm-empty-space {
  height: 40px;
  width: 100%;
}
.Certificate body {
  padding: 20px 0;
  background: #ccc;
}
.Certificate .pm-certificate-container {
  position: relative;
  width: 800px;
  height: 600px;
  background-color: #618597;
  padding: 30px;
  color: #333;
  font-family: 'Open Sans', sans-serif;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background: -webkit-repeating-linear-gradient(45deg, #618597, #618597 1px, #b2cad6 1px, #b2cad6 2px);
  background: repeating-linear-gradient(90deg, #618597, #618597 1px, #b2cad6 1px, #b2cad6 2px);
}
.Certificate .pm-certificate-container .outer-border {
  width: 794px;
  height: 594px;
  position: absolute;
  left: 50%;
  margin-left: -397px;
  top: 50%;
  margin-top: -297px;
  border: 2px solid #fff;
}
.Certificate .pm-certificate-container .inner-border {
  width: 730px;
  height: 530px;
  position: absolute;
  left: 50%;
  margin-left: -365px;
  top: 50%;
  margin-top: -265px;
  border: 2px solid #fff;
}
.Certificate .pm-certificate-container .pm-certificate-border {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: 1px solid #e1e5f0;
  background-color: #ffffff;
  background-image: none;
}
.Certificate .pm-certificate-container .pm-certificate-border .pm-certificate-block {
  width: 650px;
  height: 200px;
  position: relative;
  left: 50%;
  margin-left: -325px;
  top: 70px;
  margin-top: 0;
}
.Certificate .pm-certificate-container .pm-certificate-border .pm-certificate-header {
  margin-bottom: 10px;
}
.Certificate .pm-certificate-container .pm-certificate-border .pm-certificate-title {
  position: relative;
  top: 40px;
}
.Certificate .pm-certificate-container .pm-certificate-border .pm-certificate-title h2 {
  font-family: 'Pinyon Script', cursive;
  font-size: 34px !important;
}
.Certificate .pm-certificate-container .pm-certificate-border .pm-certificate-body {
  padding: 20px;
}
.Certificate .pm-certificate-container .pm-certificate-border .pm-certificate-body .pm-name-text {
  font-size: 20px;
}
.Certificate .pm-certificate-container .pm-certificate-border .pm-earned {
  margin: 15px 0 20px;
}
.Certificate .pm-certificate-container .pm-certificate-border .pm-earned .pm-earned-text {
  font-size: 20px;
}
.Certificate .pm-certificate-container .pm-certificate-border .pm-earned .pm-credits-text {
  font-size: 15px;
}
.Certificate .pm-certificate-container .pm-certificate-border .pm-course-title .pm-earned-text {
  font-size: 20px;
}
.Certificate .pm-certificate-container .pm-certificate-border .pm-course-title .pm-credits-text {
  font-size: 15px;
}
.Certificate .pm-certificate-container .pm-certificate-border .pm-certified {
  font-size: 12px;
}
.Certificate .pm-certificate-container .pm-certificate-border .pm-certified .underline {
  margin-bottom: 5px;
}
.Certificate .pm-certificate-container .pm-certificate-border .pm-certificate-footer {
  width: 650px;
  height: 100px;
  position: relative;
  left: 50%;
  margin-left: -325px;
  bottom: -105px;
}
`
