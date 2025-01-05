function openCvReady(){

    cv["onRuntimeInitialized"]= () =>{
        //read image from the image source and convert into opencv format

        let imgMain=cv.imread("img-main");
        cv.imshow("main-canvas",imgMain);
        imgMain.delete();
        //----- RGB BUTTON ---
        document.getElementById("button-rgb").onclick=function(){
                console.log("RGB Button Pressed");
                let imgMain=cv.imread("img-main");
                cv.imshow("main-canvas",imgMain);
                imgMain.delete();
        };

        //----- GRAY BUTTON-----
        document.getElementById("button-gray").onclick=function(){
            console.log("RGB Button Pressed");
            let imgMain=cv.imread("img-main");//image in opencv format
            let imgGray=imgMain.clone();//copy of main img
            cv.cvtColor(imgMain,imgGray,cv.COLOR_RGB2GRAY,0);
            cv.imshow("main-canvas",imgGray);
            imgMain.delete();
            imgGray.delete(); 
        };
        //----- BLUR BUTTON-----
        document.getElementById("button-blur").onclick=function(){
            console.log("RGB Button Pressed");
            let imgMain=cv.imread("img-main");//image in opencv format
            let imgBlur=imgMain.clone();
            //add blur using GaussianBlur
            let ksize=new cv.Size(13,13);
            cv.GaussianBlur(imgMain,imgBlur,ksize,0);
            cv.imshow("main-canvas",imgBlur);
            imgMain.delete();
            imgBlur.delete();

        };
        // ------ EDGE BUTTON -------
        document.getElementById("button-edge").onclick=function(){
            let imgMain=cv.imread("img-main");//image in opencv format
            let imgCanny=imgMain.clone();
            console.log("RGB Button Pressed");
            //find edges using canny edge detector
            cv.Canny(imgMain,imgCanny,150,200);
            cv.imshow("main-canvas",imgCanny);
            imgMain.delete();
            imgCanny.delete();  
        };      
        
            
    };
}