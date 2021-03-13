<!--
 * @Descripttion:标准分类下拉框组件
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-13 14:27:27
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-13 14:31:15
-->
<template>
    <Select v-model="model1" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
</template>
<script>
export default {
    name:"CategorySelect",
    data(){
        return {
            cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
            ],
            model1:""
        }
    }
}
</script>
