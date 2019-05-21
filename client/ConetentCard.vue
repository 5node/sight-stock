<template>
	<div>
		<h1>제목: {{content.title}}</h1>
		<p>제작자: {{content.creater}}</p>
		<p>미리보기</p>
		<img :src=content.imageAddress>
	</div>
</template>
<script>
export default {
	props: ['content']
}
</script>
