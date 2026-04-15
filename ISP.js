class Printer{
    print(){
        console.log("printing your document");
    }
}
class Scanner{
    scan(){
        console.log("scanning your document");
}}
class Fax{
    fax(){
        console.log("faxing your document");}
}
class BasicPrinter extends Printer{
    print(){
        console.log("printing your document");
    }
}
class AdvancedPrinter extends  Fax{
    print(){
        console.log("printing your document");
    }
    scan(){
        console.log("scanning your document");
    }
    fax(){
        console.log("faxing your document");
    }
}