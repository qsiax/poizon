
/** @type {import('../../ras/$types').Actions} */
export const actions = {
    add: async ({ request, locals }) => {
        let data = await request.formData()

        await locals.pb.collection('gds').create(data)
    }
}