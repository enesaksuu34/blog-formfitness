import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";

const About: NextPage = () => {
  return (
    <>
      <Page
        title="Hakkında - Form VIP Fitness Blog"
        description="Form VIP Fitness Blog'a hoş geldiniz - fitness dünyasında rehberiniz. En son egzersiz trendleri, sağlıklı yaşam ipuçları ve uzman tavsiyeleriyle dolu bir dünyaya dalın."
      >
        <Prose>
        <p>
          Form VIP Fitness olarak, sağlıklı ve formda bir yaşamı desteklemek için buradayız. Uzman eğitmenlerimiz, spor meraklıları ve sağlık profesyonelleri tarafından yönetilen ekibimiz, size en güncel ve etkili fitness çözümlerini sunmaya kararlıdır.
        </p>
        <p>
          Blogumuzda, yılların deneyimi ve dünya genelinde hizmet verdiğimiz müşterilerden edindiğimiz bilgilerle şekillenen yazılar bulacaksınız. Egzersiz ipuçlarından beslenme önerilerine, spor psikolojisinden sağlıklı yaşam stratejilerine kadar geniş bir yelpazede bilgi paylaşacağız.
        </p>
        <p>
          Misyonumuz basit ama güçlü: Fitness ve sağlıklı yaşamı herkes için erişilebilir kılmak. Blogumuz aracılığıyla karmaşık konuları basitleştirerek pratik tavsiyeler sunmayı ve sürekli öğrenme ve büyümeye kendini adamış bir topluluk oluşturmayı hedefliyoruz.
        </p>
        </Prose>
      </Page>
    </>
  );
};

export default About;
