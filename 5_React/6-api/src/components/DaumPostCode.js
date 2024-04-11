const DaumPostCode = () => {
    new window.daum.Postcode({
        oncomplete: function(data) {
            console.log(data);
        }
    }).open();
}
export default DaumPostCode;