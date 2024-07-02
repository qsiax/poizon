/** @type {import('../../ras/$types').PageServerLoad} */
export async function load({locals}) {
    const records = await locals.pb.collection('gds').getFullList(200, {
        sort: '-created'
    })
    return {
        records
    }
}