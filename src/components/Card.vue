<template>
    <div class="card-div">
        <div class="box">
            <div class="imgBx">
                <slot name="img"></slot>
            </div>
            <div class="content">
                <slot name="content"></slot>
            </div>
        </div>
        <div class="box">
            <div class="imgBx">
                <slot name="img"></slot>
            </div>
            <div class="content">
                <slot name="content"></slot>
            </div>
        </div>
        <div class="box">
            <div class="imgBx">
                <slot name="img"></slot>
            </div>
            <div class="content">
                <slot name="content"></slot>
            </div>
        </div>


    </div>

</template>
<script>
export default {
    name: "CardComp"
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.card-div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem;
    /*min-height: 100vh; */
    /* background: #010615; */
    /* background: #fff; */
}

.box {
    position: relative;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
    background: #000;
    transition: 0.5s;
}

.box:hover {
    height: 400px;
}

.box .imgBx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
}

.box .imgBx img {
    max-width: 100%;
    opacity: 0.1;
    transition: 0.5s;
    overflow: hidden;
}

.box:hover .imgBx img {
    opacity: 1;
}

.box::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -1;

}

.box::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -2;
    filter: blur(40px);

}

/*.box::before,
.box::after {
    background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
}

.box:nth-child(2):before,
.box:nth-child(2):after {
    background: linear-gradient(235deg, #ff005e, #010615, #fbff00);
}

.box:nth-child(3):before,
.box:nth-child(3):after {
    background: linear-gradient(235deg, #772aff, #010615, #2196F3);
}*/

.box::before,
.box::after {
    background: linear-gradient(235deg, #B8860B, #010615, #B8860B);
}

.box .content {
    position: absolute;
    bottom: 0;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 90px;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: 0;
    transition: 0.5s;

}

.box:hover .content {
    opacity: 1;

}

.box .content h2 {
    font-size: 20px;
    color: #fff;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 1px;
}

.box .content h2 span {
    font-size: 14px;
    color: #fff;
    font-weight: 200;
    line-height: 20px;
    letter-spacing: 2px;
}

@media (max-width: 330px) {
    .box {
        height: 230px;
    }

    .box:hover {
        height: 330px;
    }

    .box .content h2 {
        font-size: 16px;
    }

    .box .content h2 span {
        font-size: 12px;
    }


}
</style>