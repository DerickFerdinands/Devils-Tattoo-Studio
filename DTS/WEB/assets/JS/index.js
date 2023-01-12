let imgCount=0;

for (let i=1;i<311;i++) {
    console.log("Append"+i);
    if (imgCount == 0) {
        $('#galSec').append(`<div class="row col-12">
                    <div class="col-6"><img alt="" src="assets/Tats/ (${i}).jpg"></div>
                    <div class="col-6 align-items-end"><h1>${i}</h1></div>
                </div>`);
        imgCount++;
    } else {
        $('#galSec').append(`<div class="row col-12">
            <div class="col-6"></div>
            <div class="col-6"><img alt="" src="assets/Tats/ (${i}).jpg"></div>
        </div>>`);
        imgCount = 0;
}}