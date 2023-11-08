const PredictedDiseaseData1m = [
    {
        month: 1,
    },
    {
        month: 2,
    },
    {
        month: 3,
    },
    {
        month: 4,
    },
    {
        month: 5,
    },
    {
        month: 6,
    },
    {
        month: 7,
    },
    {
        month: 8,
        flu: 3,
        covid19: 3,
        pneumonia: 10,
        hepatitis: 1,
        chickenpox: 1,
        dengue: 6,
        tuberculosis: 2,
    },
    {
        month: 9,
        flu: 3,
        covid19: 3,
        pneumonia: 10,
        hepatitis: 1,
        chickenpox: 1,
        dengue: 6,
        tuberculosis: 2,
    },
    {
        month: 10,
    },
    {
        month: 11,
    },
    {
        month: 12,
    },
    {
        month: 13,
    },
    {
        month: 14,
    },
    {
        month: 15,
    },
    {
        month: 16,
    },
    {
        month: 17,
    },
    {
        month: 18,
    },
    {
        month: 19,
    },
    {
        month: 20,
    },
]
const fs = require('fs');
const filePath = 'diseaseDatapredict1m.json';
const jsonData = JSON.stringify(PredictedDiseaseData1m);
fs.writeFileSync(filePath, jsonData);
console.log('Dữ liệu đã được lưu vào tệp:', filePath);