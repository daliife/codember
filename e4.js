// ** Hackers dañan sistema de archivos **
// En un mundo donde la información es poder, un hacker conocido como Savipo Yatar descubre una serie de archivos en un servidor altamente protegido.

// Estos archivos contienen secretos que podrían cambiar el curso de la historia. Pero hay un problema: algunos de los archivos son falsos, diseñados para engañar a los intrusos. Savipo Yatar debe determinar rápidamente cuáles archivos son reales y cuáles son falsos.

// Cada archivo tiene un nombre con dos partes, separadas por un guion (-). La primera parte es una cadena alfanumérica y la segunda es un checksum, que es una cadena formada por los caracteres que sólo aparecen una vez en la primera parte y en el orden en que aparecen.

// Escribe un programa que determine si un archivo es real o falso basado en estas reglas.

// Ejemplos:

// Nombre del archivo: xyzz33-xy
// Resultado: ✅ Real (El checksum es válido)

// Nombre del archivo: abcca1-ab1
// Resultado: ❌ Falso (El checksum debería ser b1, es incorrecto)

// Nombre del archivo: abbc11-ca
// Resultado: ❌ Falso (El checksum debería ser ac, el orden es incorrecto)
// Cada línea indica el nombre del archivo y su correspondiente checksum, separados por un guion (-).

// ** Cómo resolverlo **
// 1. Analiza la lista de nombres de archivos y sus checksums que encontrarás en este archivo: https://codember.dev/data/files_quarantine.txt

// 2. Busca el archivo real número 33 (de todos los archivos reales, el 33º en orden de apareción) y envía su checksum con submit. Por ejemplo si el archivo es xyzz33-xy, harías:
// submit xy

const inputChecksums = `
3n3E65A-nE65A
U6Z1WWc0LP-U6Z1c0LP
la6bqS-la6bqS
lKyxSLIEj-lKyxSLIEj
7HIKAPFYsK-7HIAPFYs
IfhDJjaZKJ-IfhDjaZK
1ynAjanFox-1yAjaFox
vi2Yqle-vi2Yqle
SXxyqnzER-SXxyqnzER
uWWKcD3b-uKcD3b
fxwzTMRB-fxwzTMRB
1f1dLc4p-fdLc4p
H0nY8w-H0nY8w
1tVQjP4-1tVQjP4
o8sRM-o8sRM
Hn2XWpspJq-Hn2XWsJq
88pauAKQ-pauAKQ
SF5yFf3uW-S5yf3uW
KOjaML-KOjaML
n1sjIG-n1sjIG
H3u4IEwR-H3u4IEwR
Er1iMVvtSb-Er1iMVvtSb
6bDBFweu3-6bDBFweu3
QMG2y-QMG2y
QqS8zu-QqS8zu
nWf2oHc2D-nWfoHcD
ywhoHTg-ywhoHTg
5rS6rC-5S6C
kZkSVr-ZSVr
KkGQLG-KkQL
J8X6VNHKk-J8X6VNHKk
hs5CsfYsN2-h5CfYN2
O2hrQ-O2hrQ
UU7HuFY-7HuFY
vSlgP-vSlgP
LO43CA6h-LO43CA6h
rADjgAXZbD-rjgXZb
219JS-219JS
Tw6jlpH-Tw6jlpH
ZmfY62-ZmfY62
Xh4lMhN-X4lMN
9wPi1-9wPi1
LC3ucqzRev-LC3ucqzRev
eqRKXqZzCH-eRKXZzCH
m9Rsx1-m9Rsx1
WKrbn0jLE-WKrbn0jLE
MsW8Mg-sW8g
OKdIPOl-KdIPl
N2ZA7H-N2ZA7H
F86afig-F86afig
BvEzt4ys-BvEzt4ys
wyAmFlx7m-wyAFlx7
73sBHIzZTU-73sBHIzZTU
E5liPXG3ZM-E5liPXG3ZM
wohjWqIEG-wohjWqIEG
Ajw0o0-Ajwo
V3ridipc-V3rdpc
ysikPhv-ysikPhv
iQSz654tNX-iQSz654tNX
qYSwYKifb-qSwKifb
W79773fSH-W93fSH
qNWDAUt-qNWDAUt
i8cDcz-i8Dz
DhJS4-DhJS4
j2TiHE-j2TiHE
m4fpbb2zI-m4fp2zI
bNirf51-bNirf51
aPNkUTXWs-aPNkUTXWs
EfsBW8-EfsBW8
safHshz-afHhz
RycVH06w7-RycVH06w7
IU4n2-IU4n2
lrXEc2N2u-lrXEcNu
bMcOtLT7-bMcOtLT7
hILDoXNIP-hLDoXNP
RoG5ra-RoG5ra
VAbQO-VAbQO
lgnMYBnI-lgMYBI
Y5TZwZfJ-Y5TwfJ
wTI9xRn-wTI9xRn
LEs3Fcj7M6-LEs3Fcj7M6
iccMmtrl-iMmtrl
g9R8e-g9R8e
XWJWnygqc-XJnygqc
QMLJAm1Kf-QMLJAm1Kf
EfA1kaddYq-EfA1kaYq
ieY5aGGV-ieY5aV
3lZn2-3lZn2
VTQVbY-TQbY
KxUMQYJENi-KxUMQYJENi
mPqYGQ-mPqYGQ
IyeJXmUd3c-IyeJXmUd3c
xXsymu5Av-xXsymu5Av
iJXvYyTcD-iJXvYyTcD
7VrbUTTKyi-7VrbUKyi
fXr9O6-fXr9O6
4VNq3-4VNq3
sDAec-sDAec
zOAGtZEc-zOAGtZEc
Cb2n1GNN-Cb2n1G`;

const checksumList = inputChecksums.split("\n");

const realFiles = checksumList.filter((file) => {
  const [name, checksum] = file.split("-");
  const nameArray = name.split("");
  let createdChecksum = "";
  nameArray.forEach((letter) => {
    if (nameArray.indexOf(letter) === nameArray.lastIndexOf(letter)) {
      createdChecksum += letter;
    }
  });
  return createdChecksum === checksum;
});

console.log(realFiles[32].split("-")[1]);
