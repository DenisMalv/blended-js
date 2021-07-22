// // Task 2. You need to calculate amount of tip to give in a restaurant/cafe.
// // 	Workflow:
// // 1.	User inputs check number. (Use “prompt” function).
// // 2.	User inputs tip percentage. (Use “prompt” function)
// // 3.	You need to validate the input data: both values should be numbers, percentage can’t be negative and bigger than 100.
// // 4.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// // 5.	You need to calculate tip amount and total sum to pay.
// // 6.	Show message: (example). Use ”alert” function
// // Check number: 200
// // Tip: 15%
// // Tip amount: 30
// // Total sum to pay:  230

// // You should show only 2 numbers after comma (if needed).

const checkSum = prompt('Enter check Sum')
const percentage = prompt('Tip percentage')
if (checkSum && checkSum.trim() && percentage && percentage.trim()) {   // Проверка на введенные симв.
    const formatCheckSum = Number.parseFloat(checkSum);                 // Преобразов строки в число
    const formatPercentage = Number.parseFloat(percentage);             // Преобразов строки в число

    if (formatCheckSum === Number.isNaN(formatCheckSum) || percentage === Number.isNaN(formatPercentage === Number.isNaN)
        || formatPercentage < 0 || formatPercentage > 100) {
        alert('Invalid input data')
    } else {
        const resultPercentage = (checkSum / 100) * percentage;
        const totalSumm = (resultPercentage + formatCheckSum).toFixed(2);
        const result = `Check number ${checkSum}\nTip ${percentage}\nTip amount ${resultPercentage}\nTotal sum to pay ${totalSumm}`
        console.log(result);
    }
} else
{
    alert('Invalid input data')
}