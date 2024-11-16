<template>
    <section class="flex justify-between px-10 mt-10"> <!-- Первая строка main section -->
        <section class="flex max-w-fit py-2 px-5 border-2 border-stone-300 border-solid rounded-lg">
            <input type="text" placeholder="Search VIN" class="outline-none">
            <img src="../../../../public/images/zoom.png" alt="" class="pl-10">
        </section>
        <section class="flex items-center gap-5">
            <section>
                <p>Select vehicles per page:</p>
            </section>
            <section class="border-2 max-w-fit py-2 px-3 gap-5 rounded-lg">
                <select name="" id="" class="bg-transparent pr-3 outline-none">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="" selected>9</option>
                </select>
            </section>
        </section>
        <section class="flex gap-5 items-center bg-[#D90E32] px-5 rounded-lg">
            <section>
                <span class="text-3xl font-sans text-slate-100 font-medium">+</span>
            </section>
            <section>
                <span class="font-sans text-slate-100 font-bold">ADD VECHICLE</span>
            </section>
        </section>
    </section>
</template>