<script setup>
  const links = [
    { name: "CollegeShelf #1", link: "https://chat.whatsapp.com/K8ZAT2ERiR8DWddZZRhV69", img: "/logo.webp" },
    { name: "CollegeShelf #2", link: "https://chat.whatsapp.com/E1QvxQghG568VXxo7PdINE", img: "/logo.webp" },

    { name: "QuestionShelf", link: "https://t.me/+sxCiRknMxW8zNGU8", img: "/links/question-shelf.webp" },
    { name: "SectionShelf", link: "https://t.me/+XT2m4V_GqyVjOTM0", img: "/links/section-shelf.webp" },

    //{ name: "ShelfCode", link: "https://chat.whatsapp.com/C4GAqsM7eKHE3ltSJYSZ85", img: "/links/shelf-code.webp" },

    // Others
    { name: "تقويم الفصل الدراسي 1445", link: "https://docdro.id/m9F9FGv", img: "/links/calendar.webp" },
    { name: "الخطط الدراسية عام 1445", link: "https://docdro.id/MBm62zW", img: "/links/courses.webp" },
    { name: "ترتيبة | رتّب موادك بضغطة زر", link: "https://trtebh.com/", img: "/links/trtebh.webp" },
    { name: "Box", link: "https://app.box.com/s/wlrcpuv7bm0qqvxjwx67dj9taaadfhl2", img: "/links/box.jpeg" },
    { name: "تقييم", link: "https://unirate.xyz/", img: "/links/unirate.png" }

  ]

</script>

<template>
    <div style="display: flex; flex-direction: column; align-items: center;">
        <a v-for="link in links" :href="link.link" >
            <img :src="link.img">
            <span>{{ link.name }}</span>
        </a>
    </div>
</template>

<style scoped>
    a {
        display: flex;

        align-items: center;

        height: 40px;
        width: 100%;
        max-width: 350px;

        border: 0px;
        
        margin-bottom: 15px;
        border-radius: 5px;

        background: linear-gradient(90deg, #A13333, #B3541E);
    }

    a:last-child {
        margin-bottom: 0px;
    }

    a:hover {
        background: linear-gradient(90deg, #B3541E, #A13333);
    }

    a > img {
        width: 35px;
        height: 35px;

        margin-left: 5px;

        border-radius: 50%;
    }

    a > span {
        margin: 0 auto;
    }

    @media screen and (min-width: 500px) and (min-height: 768px) {
        a {
            height: 50px;
            max-width: 500px;
        }

        a > img {
            width: 45px;
            height: 45px;
        }
    }
</style>