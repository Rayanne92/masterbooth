import heroImage from '@/public/images/hero.jpg';
import weddingImage from '@/public/images/wedding.jpg';
import partyImage from '@/public/images/party.jpg';
import dinnerImage from '@/public/images/dinner.jpg';
import birthdayImage from '@/public/images/birthday.jpg';
import detailImage from '@/public/images/detail.jpg';
/** Informations à compléter avant publication. Ne pas inventer de coordonnées. */
export const business = { name: 'Master Booth', siteUrl: process.env.NEXT_PUBLIC_SITE_URL || '', email: '', phone: '+33 6 61 52 93 04', address: '', legalName: '', registrationNumber: '', publicationDirector: '', instagramUrl: '' };
export const whatsappUrl = 'https://wa.me/33661529304?text=Bonjour%20Master%20Booth%2C%20je%20souhaite%20conna%C3%AEtre%20vos%20disponibilit%C3%A9s%20pour%20mon%20%C3%A9v%C3%A9nement.';
export const nav = [['Accueil', '/#accueil'], ['La prestation', '/#prestation'], ['Galerie', '/#galerie'], ['Comment ça marche ?', '/#fonctionnement'], ['FAQ', '/#faq']] as const;
export const departments = ['Paris — 75', 'Seine-et-Marne — 77', 'Yvelines — 78', 'Essonne — 91', 'Hauts-de-Seine — 92', 'Seine-Saint-Denis — 93', 'Val-de-Marne — 94', 'Val-d’Oise — 95'];
/** Photographies d’ambiance illustratives, à remplacer par les photos de Master Booth. */
export const photos = {
 hero: heroImage, wedding: weddingImage, party: partyImage, dinner: dinnerImage, birthday: birthdayImage, detail: detailImage
};
export const faqs = [
 ['Où vous déplacez-vous ?', 'Master Booth intervient exclusivement dans toute l’Île-de-France, directement sur votre lieu de réception.'],
 ['Le déplacement est-il payant ?', 'Non, le déplacement est compris dans la prestation partout en Île-de-France, sans supplément.'],
 ['Pour quels événements peut-on réserver Master Booth ?', 'Mariages, anniversaires, événements professionnels, soirées privées, baby showers et autres événements : chaque occasion mérite ses souvenirs.'],
 ['Combien de temps à l’avance faut-il réserver ?', 'La disponibilité dépend de votre date. Contactez-nous sur WhatsApp pour vérifier la disponibilité de Master Booth pour votre événement.'],
 ['Comment réserver ?', 'Écrivez-nous directement sur WhatsApp en précisant la date, le lieu et le type d’événement. Nous vous répondrons avec les prochaines étapes.']
];
