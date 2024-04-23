function daysOfCoding() {    
    // 특정 날짜와 오늘 날짜를 사용하여 테스트
    var startDate = new Date('2019-12-27'); // 시작 날짜
    var endDate = new Date(); // 오늘

    // 시작 날짜와 끝 날짜 사이의 밀리초(ms) 차이 계산
    var timeDiff = endDate.getTime() - startDate.getTime();

    // 일 단위로 변환
    return  Math.ceil(timeDiff / (1000 * 3600 * 24));
}

window.onload = function() {
    var element = document.getElementsById('days-of-coding');

    console.log('daysOfCoding: ' + daysOfCoding());
    element.setAttribute('data-number', daysOfCoding());
}