// // // BAI 2
// // function score(physics, chemistry, biology, mathematics, computer) {
// //     var point = (physics + chemistry + biology + mathematics + computer) / 5
// //     if (point >= 9) {
// //       return 'Grade A'
// //     } else if (point >= 8) {
// //       return 'Grade B'
// //     } else if (point >= 7) {
// //       return 'Grade C'
// //     } else if (point >= 6) {
// //       return 'Grade D'
// //     } else if (point >= 4) {
// //       return 'Grade E'
// //     } else {
// //       return 'Grade F'
// //     }
// //   }
// //   var physics = 5
// //   var chemistry = 5
// //   var biology = 9
// //   var mathematics = 8
// //   var computer = 3
// //   var grade = score(physics, chemistry, biology, mathematics, computer)
// //   console.log(grade)

// //   // BAI 3
// //   function printUpDate(data) {
// //       // Sử dụng join để ghép các phần tử trong mảng với dấu phẩy và khoảng trắng
// //       console.log(data.join(", "));
// //   }
// //   var data1 = ["A", "B", "C"];
// //   var data2 = [1, 2, 3];
// //   printUpDate(data1);
// //   printUpDate(data2);

// //   //BAI 4
// //   function check(data) {
// //     if (data.includes(5)) {
// //         console.log("Yes");
// //     } else {
// //         console.log("No");
// //     }
// //   }

// //   var data1 = [1, 2, 3, 4, 6];
// //   var data2 = [1, 2, 3, 5, 6];

// //   check(data1);
// //   check(data2);

// //   //BAI 5

// //   function find(data) {
// //     for (let i = 0; i < data.length; i++) {
// //         if (data[i] > 0) {
// //             console.log(i + " " + data[i]);
// //             return;
// //         }
// //     }
// //     console.log("Không có kết quả");
// //   }

// //   var data1 = [-1, -2, 3, 4, -5];
// //   var data2 = [-1, 2, 3, 4, -5];
// //   var data3 = [-1, -2];
// //   find(data1);
// //   find(data2);
// //   find(data3);

// //   //BAI 6
// //   function modifyArray(data) {
// //     // Xóa phần tử đầu tiên của mảng
// //     data.shift();

// //     // Xóa phần tử cuối cùng của mảng
// //     data.pop();

// //     // Thêm phần tử "X" vào cuối mảng
// //     data.push("X");

// //     // In ra mảng sau khi đã chỉnh sửa
// //     console.log(data);
// //   }
// //   var data = [1, 2, 3, 4, 5];
// //   modifyArray(data);

// //   // BAI 7
// //   function first(str) {
// //     // Viết hoa ký tự đầu tiên và giữ nguyên phần còn lại của chuỗi
// //     var capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
// //     console.log(capitalizedStr);
// //   }
// //   first("this is Test");
// //   first("hello a");

// // // Bai 11
// // function twoSum(a1, a2) {
// //     // Chuyển đổi mảng thành số nguyên
// //     var n1 = parseInt(a1.join(''));
// //     var n2 = parseInt(a2.join(''));
// //     return n1 + n2;
// // }
// // console.log(twoSum([2, 4, 6], [1, 0]));

// // // BAI 12

// // function calcSum(arr) {

// //     var totalSum = 0;
// //     // Duyệt qua từng mảng con trong mảng chính
// //     for (var i = 0; i < arr.length; i++) {
// //         var subArray = arr[i];
// //         // Tính tổng của từng mảng con
// //         var subArraySum = 0;
// //         for (var j = 0; j < subArray.length; j++) {
// //             subArraySum += subArray[j];
// //         }

// //         // Cộng tổng của mảng con vào tổng cuối cùng
// //         totalSum += subArraySum;
// //     }

// //     // Trả về tổng cuối cùng
// //     return totalSum;
// // }

// // console.log(calcSum([ [1,2,3], [2,3,4], [0,10] ]));

// // //Bài 13
// // var heading = document.querySelector('h1')
// // var listItems = document.querySelectorAll('li')
// // var color = ['red', 'green', 'blue', 'purple', 'orange']
// // let colorIndex = 0
// // for (let i = 0; i < listItems.length; i++) {
// //   var item = listItems[i]
// //   if (item.textContent.includes('Done')) {
// //     item.style.backgroundColor = 'green'
// //   } else if (item.textContent.includes('Ongoing')) {
// //     item.style.backgroundColor = 'yellow'
// //   } else if (item.textContent.includes('Coming')) {
// //     item.style.backgroundColor = 'red'
// //   }
// // }
// // // //Bài 14
// // var fruitList = ['apple', 'banana', 'tomato']
// // var ulElement = document.getElementById('fruit-list')
// // for (let i = 0; i < fruitList.length; i++) {
// //   var liElement = document.createElement('li')
// //   liElement.textContent = fruitList[i]
// //   ulElement.appendChild(liElement)
// // }
// // // Bài 16
// // var ulElements = document.querySelectorAll('ul')
// // for (let i = 0; i < ulElements.length; i++) {
// //   var firstLi = ulElements[i].querySelector('li:first-child')
// //   var lastLi = ulElements[i].querySelector('li:last-child')
// //   if (firstLi) firstLi.textContent = 'first'
// //   if (lastLi) lastLi.textContent = 'last'
// // }
// // //Bài 15
// const image = "https://dbk.vn/uploads/ckfinder/images/tin-tuc-1/anh-ma-kinh-di-26.jpg";
// const imgElement = document.createElement('img');
// imgElement.src = image;
// const divElement = document.querySelector('div');
// divElement.appendChild(imgElement);
// //bài 17
// var itemList = document.getElementById('item-list');
// var newItemInput = document.getElementById('new-item');
// var createBtn = document.getElementById('create-btn');
// createBtn.addEventListener('click', function() {
//     var newItemText = newItemInput.value;
//     if (newItemText.trim() !== "") {
//         var newItem = document.createElement('li');
//         newItem.textContent = newItemText;
//         newItem.addEventListener('click', function() {
//             var newText = prompt('Enter new text:', newItem.textContent);
//             if (newText !== null) {
//                 newItem.textContent = newText;
//             }
//         });
//         itemList.appendChild(newItem);
//         newItemInput.value = '';
//     }
// });
// //Bài 20
const populationBtn = document.getElementById('population-btn');
const languagesBtn = document.getElementById('languages-btn');
const populationChart = document.getElementById('population-bd');
const languagesChart = document.getElementById('languages-bd');
const populationData = [
    { country: 'World', value: 7693165599 },
    { country: 'China', value: 1377422166 },
    { country: 'India', value: 1295210000 },
    { country: 'USA', value: 323947000 },
    { country: 'Indonesia', value: 258705000 },
    { country: 'Brazil', value: 206135893 },
    { country: 'Pakistan', value: 194125062 },
    { country: 'Nigeria', value: 186988000 },
    { country: 'Bangladesh', value: 161006790 },
    { country: 'Russia', value: 146599183 },
    { country: 'Japan', value: 126960000 },
];

const languageData = [
    { language: 'English', value: 91 },
    { language: 'French', value: 45 },
    { language: 'Arabic', value: 25 },
    { language: 'Spanish', value: 24 },
    { language: 'Portuguese', value: 9 },
    { language: 'Russian', value: 9 },
    { language: 'Dutch', value: 8 },
    { language: 'German', value: 7 },
    { language: 'Chinese', value: 5 },
    { language: 'Serbian', value: 4 },
];

function viewChart(data, chartElement, type) {
    chartElement.innerHTML = ''; 

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const bar = document.createElement('div');
        bar.className = 'bar';

        const name = document.createElement('span');
        name.textContent = type === 'population' ? item.country : item.language;
        
        const barValue = document.createElement('div');
        barValue.style.width = type === 'population' 
            ? `${(item.value / populationData[0].value) * 100}%`
            : `${(item.value / 91) * 100}%`;

        const value = document.createElement('span');
        value.textContent = item.value.toLocaleString();
        bar.appendChild(name);
        bar.appendChild(barValue);
        bar.appendChild(value);
        chartElement.appendChild(bar);
    }
}

populationBtn.addEventListener('click', () => {
    populationChart.classList.add('active');
    languagesChart.classList.remove('active');
    populationBtn.classList.add('active');
    languagesBtn.classList.remove('active');
    viewChart(populationData, populationChart, 'population');
});

languagesBtn.addEventListener('click', () => {
    languagesChart.classList.add('active');
    populationChart.classList.remove('active');
    languagesBtn.classList.add('active');
    populationBtn.classList.remove('active');
    viewChart(languageData, languagesChart, 'language');
});
viewChart(populationData, populationChart, 'population');
populationChart.classList.add('active');





