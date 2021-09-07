class UI{
    constructor(firstSelect,secondSelect){
        this.firstSelect=firstSelect;
        this.secondSelect=secondSelect;
        
        this.outputFirst=document.getElementById("outputFirst");
        this.outputSecond=document.getElementById("outputSecond");
        this.outputRate1=document.getElementById("outputRate1");
        this.outputRate2=document.getElementById("outputRate2");
        this.outputResult=document.getElementById("outputResult");

    }
    changeFirst(){
        this.outputFirst.textContent = this.firstSelect.options[this.firstSelect.selectedIndex].textContent;
        this.outputRate1.textContent=this.firstSelect.options[this.firstSelect.selectedIndex].textContent;
    }
    changeSecond(){
        this.outputSecond.textContent = this.secondSelect.options[this.secondSelect.selectedIndex].textContent;
        this.outputRate2.textContent= this.secondSelect.options[this.secondSelect.selectedIndex].textContent;
    }
    displayResult(result){
        this.outputResult.value=result;
    }
}