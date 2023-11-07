export const DiseaseData = [
    {
        month: 1,
        flu: 4,
        covid19: 4,
        pneumonia: 3,
        hepatitis: 0,
        chickenpox: 0,
        dengue: 0,
        tuberculosis: 2,
    },
    {
        month: 2,
        flu: 0,
        covid19: 0,
        pneumonia: 3,
        hepatitis: 0,
        chickenpox: 1,
        dengue: 0,
        tuberculosis: 3,
    },
    {
        month: 3,
        flu: 3,
        covid19: 0,
        pneumonia: 14,
        hepatitis: 0,
        chickenpox: 0,
        dengue: 0,
        tuberculosis: 3,
    },
    {
        month: 4,
        flu: 0,
        covid19: 0,
        pneumonia: 18,
        hepatitis: 0,
        chickenpox: 0,
        dengue: 0,
        tuberculosis: 2,
    },
    {
        month: 5,
        flu: 2,
        covid19: 0,
        pneumonia: 9,
        hepatitis: 1,
        chickenpox: 1,
        dengue: 0,
        tuberculosis: 1,
    },
    {
        month: 6,
        flu: 0,
        covid19: 0,
        pneumonia: 2,
        hepatitis: 1,
        chickenpox: 1,
        dengue: 0,
        tuberculosis: 4,
    },
    {
        month: 7,
        flu: 1,
        covid19: 4,
        pneumonia: 17,
        hepatitis: 1,
        chickenpox: 3,
        dengue: 3,
        tuberculosis: 2,
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
]

export const PredictedDiseaseData = [
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
        flu: 3,
        covid19: 3,
        pneumonia: 10,
        hepatitis: 1,
        chickenpox: 1,
        dengue: 6,
        tuberculosis: 2,
    },
    {
        month: 11,
        flu: 3,
        covid19: 3,
        pneumonia: 10,
        hepatitis: 1,
        chickenpox: 1,
        dengue: 6,
        tuberculosis: 2,
    },
]

export async function updatePredictedDiseaseData() {
    const latestMonthData = DiseaseData[DiseaseData.length - 1];
    const current_month = latestMonthData.month;
    const nextMonths = [1, 2, 3];
    const apiUrl = "https://dohubapps.com/user/nhocatofb/5000/predict";

    nextMonths.forEach((next_month) => {
        const requestBody = {
            current_month: 8,
            current_patient: 10,
            disease_name: "Pneumonia",
            next_month: next_month,
        }
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        })
            .then((response) => response.json())
            .then((data) => {
                PredictedDiseaseData[8 - 1 + next_month].pneumonia = data.predicted_cases;
            })
            .catch((error) => {
                console.error(`Lỗi khi gửi yêu cầu API cho viêm phổi next_month=${1}:`, error);
            });
    })

}

