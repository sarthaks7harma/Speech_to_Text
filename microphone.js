
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const searchForm = document.querySelector("#search-form");

const recognition = new SpeechRecognition();
const searchFormInput = searchForm.querySelector("input");
recognition.interimResults = true;
 recognition.continuous = false;
if (SpeechRecognition) {
    console.log("supported")
    recognition.continuous = true;
    const micBtn = searchForm.querySelector("button");
    const micIcon = micBtn.querySelector("i");
    micBtn.addEventListener("click", micBtnClick);
    function micBtnClick() {
        if (micIcon.classList.contains("fa-microphone")) {
            recognition.start();
        } else {
            recognition.stop();
        }
    }
    recognition.addEventListener("start", startSpeechRecognition);
    function startSpeechRecognition() {
        micIcon.classList.remove("fa-microphone");
        micIcon.classList.add("fa-microphone-slash");
     
    }
    recognition.addEventListener("result", e => {
        const transcript = e.results[0][0].transcript;
        searchFormInput.value = transcript;
        var x = e.results[0].isFinal;
        console.log(x);
        if (x) {
            setTimeout(() => {
                searchForm.submit();
            }, 2000);

        }
    });
}


else {
    console.log("browser not supported")
}
	
