<template>
    <div>
        <div v-if="!$subReady.Contents">Loading...</div>
        <div v-else>
			<ul>
				<div v-for="content in ContentsCursor">
					<ContentCard :content=content></ContentCard>
				</div>
			</ul>
        </div>
    </div>
</template>

<script>
	import '/imports/collections/Contents';
	import ContentCard from './ConetentCard';

    export default {
        data() {
            console.log('Sending non-Meteor data to Vue component');
            return {
                hello: 'World',
                settings: Meteor.settings.public,   // not Meteor reactive
                address: '0x1111111111',
                balance:  '100000'
            }
		},
		components:{
			ContentCard
		},
        // Vue Methods
        // Meteor reactivity
        meteor: {
            // Subscriptions - Errors not reported spelling and capitalization.
            $subscribe: {
                'Contents': []
            },
            // A Minimongo cursor on the Time collection is added to the Vue instance
            ContentsCursor () {
                // Here you can use Meteor reactive sources like cursors or reactive vars
                // as you would in a Blaze template helper
                return Contents.find({}, {
                    sort: {id: -1}
                })
            },
        }
    }
</script>

<style scoped>
    p {
        font-size: 2em;
    }
</style>