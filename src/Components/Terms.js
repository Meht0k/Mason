import React from 'react';
import './Css/Terms.css';

const Terms = () => {

  const termsContent = [
    {
      id: 1,
      heading: "Article 1 - Definitions",
      other: [
        {
          id: 1,
          para: "In these Terms and Conditions, the following terms shall have the following meanings:",
        },
        {
          id: 2,
          para: "1. Additional agreement: an agreement in which the Consumer acquires products, digital content and/or services with respect to a distance agreement and these goods, digital content and/or services are delivered by the Entrepreneur or a third party on the basis of an arrangement between this third party and the Entrepreneur;",
        },
        {
          id: 3,
          para: " 2. Reflection period: the period during which the Consumer may use his right of withdrawal;",
        },
        {
          id: 4,
          para: " 3. Consumer: the natural person who does not act for purposes related to his/her commercial, trade, craft or professional activities;",
        },
        {
          id: 5,
          para: "4. Day: calendar day;",
        },
        {
          id: 6,
          para: " 5. Digital content: data produced and delivered in digital form;        ",
        },
        {
          id: 7,
          para: "  6. Continuing performance contract: a contract serving to deliver goods, services and/ or digital content in a given period;        ",
        },
        {
          id: 8,
          para: "7. Sustainable data carrier: any means, including email, that allow theConsumer or the Entrepreneur to store information directed to him/ her personally in such a manner that makes future consultation and use possible during a period that matches the purpose for which the information is destined and which makes unaltered reproduction of the stored information possible.",
        },
        {
          id: 9,
          para: "8. Right of withdrawal: the Consumer’s option not to proceed with the distance agreement within the cooling - off period;",
        },
        {
          id: 10,
          para: "  9. Entrepreneur: the natural of legal person who is a member of Stichting Webshop Keurmerk and who provides products, (access to) digital content and or services to Consumers at a distance;",
        },
        {
          id: 11,
          para: "10. Distance contract: a contract concluded by the Entrepreneur and the Consumer within the scope of an organised system for distance selling products, digital content and / or services, whereby exclusive or additional use is made of one or more technologies of distance communication up to the conclusion of the contract;",
        },
        {
          id: 12,
          para: "11. Standard form for withdrawal: the European standard form for withdrawal included in Appendix 1;",
        },
        {
          id: 13,
          para: "12. Technology for distance communication: a means to be used for concluding an agreement without the Consumer and the Entrepreneur being together in the same place at the same time",
        },
      ]
    },

    {
      id: 2,
      heading: "Article 2 - The Entrepreneur’s Identity",

    },
    {
      id: 3,
      heading: "Article 3 - Applicability",
      other: [
        {
          id: 1,
          para: "1. These General Terms and Conditions apply to any offer from the Entrepreneur and to any distance contract concluded by the Entrepreneur and the Consumer."
        },
        {
          id: 2,
          para: "2. Before concluding a distance contract, the Entrepreneur shall make the text of these General Terms and Conditions available free of charge and as soon as possible. If this is reasonably impossible, the Entrepreneur shall indicate in what way the General Terms and conditions can be inspected and that they will be sent free of charge if so requested, before the distant contract is concluded."
        },
        {
          id: 3,
          para: "3. If the distance contract is concluded electronically, the text of these General Terms and Conditions, in deviation from the previous section and before the distance contract is concluded, may also be supplied to the Consumer electronically in such a way that the Consumer can easily store it on a long- term data carrier. If this is reasonably impossible, it will be specified where the General Terms and Conditions can be viewed electronically and that they will be sent to at the Consumer ́s request free of charge, either via electronic means or otherwise, before concluding the distance contract;"
        },
        {
          id: 4,
          para: "4. In the event that specific product or service condition apply in addition to these General Terms and Conditions, the second and third paragraphs shall apply accordingly, and in the event of contradictory terms and conditions, the Consumer may always appeal to the applicable provision that is most favourable to him/her."
        },
      ]
    },
    {
      id: 4,
      heading: "Article 4 - The offer",
      other: [
        {
          id: 1,
          para: "1. If an offer is of limited duration or if certain conditions apply, it shall be explicitly stated in the offer."
        },
        {
          id: 2,
          para: "2. The offer contains a full and accurate description of the products, digital content and/or services offered. The description is suitably detailed to enable the Consumer to assess the products, or services and/or digital content adequately. If the Entrepreneur makes use of pictures, they are truthful images of the products and/or services provided. Obvious errors or mistakes in the offer do not bind the Entrepreneur."
        },
        {
          id: 3,
          para: "3. All offers contain such information that it is clear to the Consumer what rights and obligations are attached to accepting the offer.          "
        }
      ]
    },
    {
      id: 5,
      heading: "Article 5 - The agreement",
      other: [
        {
          id: 1,
          para: "1. Subject to the provisions in paragraph 4, the contract becomes valid when the Consumer has accepted the offer and fulfilled the terms and conditions set."
        },
        {
          id: 2,
          para: "2. If the Consumer accepted the offer via electronic means, the Entrepreneur shall promptly confirm receipt of having accepted the offer via electronic means. As long as the receipt of said acceptance has not been confirmed, the Consumer may repudiate the contract."
        },
        {
          id: 3,
          para: "3. If the contract is concluded electronically, the Entrepreneur will take appropriate technical and organizational security measures for the electronic data transfer and ensure a safe web environment. If the Consumer can pay electronically, the Entrepreneur shall observe appropriate security measures.          "
        },
        {
          id: 4,
          para: "4. The Entrepreneur may, within the limits of the law, gather information about Consumer’s ability to fulfill his payment obligations, and all facts and factors relevant to responsibly concluding the distance contract. If, acting on the results of this investigation, the Entrepreneur has sound reasons for not concluding the contract, he is lawfully entitled to refuse an order or request supported by reasons, or to attach special terms to the implementation."
        },
        {
          id: 5,
          para: "5. Before delivering the product, the Entrepreneur shall send the following information along with the product, the service or the digital content in writing or in such manner that the Consumer can store it in an accessible manner on a long-term data carrier:"
        },
        {
          id: 6,
          para: "a. the visiting address of the Entrepreneur ́s business establishment where the Consumer may get into contact with any complaints;"
        },
        {
          id: 7,
          para: "b. the conditions on which and the manner in which the Consumer may exercise the right of withdrawal, or, as the case may be, clear information about his being exempted from the right of withdrawal;"
        },
        {
          id: 8,
          para: "c. the information corresponding to existing after-sales services and guarantees;"
        },
        {
          id: 9,
          para: "d. The price including all taxes of the product, service or digital content, where applicable the delivery costs and the way of payment, delivery or implementation of the distance contract;"
        },
        {
          id: 10,
          para: "e. the requirements for cancelling the contract if the contract has a duration of more than one year or for an indefinite period of time."
        },
        {
          id: 11,
          para: "f. the standard form for withdrawal if the Consumer has the right of withdrawal."
        },
        {
          id: 12,
          para: "6. In case of a continuing performance contract, the stipulation in the previous paragraph only applies to the first delivery."
        }
      ]
    },
    {
      id: 6,
      heading: "Article 6 - Right of withdrawal",
      other: [
        {
          id: 1,
          para: "In case of products:"
        },
        {
          id: 2,
          para: "1. The Consumer can repudiate a purchase contract for a product without giving reasons for a period of reflection of at least 14 days. The Entrepreneur may ask the Consumer about the reason for the withdrawal but cannot force him to state his reason(s)."
        },
        {
          id: 3,
          para: "2. The reflection period referred to in sub-clause 1 starts on the day the product is received by the Consumer or by a third party appointed by him in advance and who is not the carrier, or"
        },
        {
          id: 4,
          para: "a. if the Consumer ordered several products in the same order: the day on which the Consumer or a third party appointed by him received the last product. The Entrepreneur may refuse an order of several products with different delivery dates provided that he clearly informs the Consumer prior to the order process."
        },
        {
          id: 5,
          para: "b. in case the delivery of a product consists of several batches or parts: the day on which the Consumer or a third party appointed by him received the last batch or the last part."
        },
        {
          id: 6,
          para: "c. in case of an agreement about regular delivery of products during a given period: the day on which the Consumer or a third party appointed by him received the first product. In case of services and digital content that is not delivered on a physical carrier:"
        },
        {
          id: 7,
          para: "3. The Consumer can terminate an agreement for services or an agreement for delivery of digital content that is not delivered on a physical carrier without giving reasons during at least 14 days. The Entrepreneur may ask the Consumer about the reason for the withdrawal but cannot force him to state his reason(s)."
        },
        {
          id: 8,
          para: "4. The reflection period referred to in Article 3 starts on the day following the conclusion of the agreement. Extended reflection period for products, services and digital content that has not been delivered on a physical carrier in case no information is given about the right of withdrawal:"
        },
        {
          id: 9,
          para: "5. If the Entrepreneur has not provided the Consumer with the legally required information about the right of withdrawal or has not provided the standard form for withdrawal, the reflection period expires twelve months after the end of the original reflection period in accordance with the reflection period determined in the previous sub-clauses of this Article."
        },
        {
          id: 10,
          para: "6. If the Entrepreneur provided the Consumer with the information referred to in the previous article within twelve months after the starting day of the original period of reflection, the period of reflection expires 14 day after the day on which the Consumer received the information."
        }
      ]
    },
    {
      id: 7,
      heading: "Article 7 - Consumer’s obligations during the reflection period",
      other: [
        {
          id: 1,
          para: "1. During this period, the Consumer shall handle the product and the packaging with care. The Consumer shall only unpack or use the product to the extent necessary for establishing the nature, the characteristics and the effect of the product. The guiding principle is that the Consumer may only handle and inspect the product in the manner in which one is allowed to handle a product in a shop."
        },
        {
          id: 2,
          para: "2. The Consumer is only liable for the decrease in value of the product that is caused by the way of handling the product which went further than allowed in sub-section 1."
        },
        {
          id: 3,
          para: "3. The Consumer is not liable for the decrease in value of the product if the Entrepreneur has not provided him with all legal information about the right of withdrawal before concluding the Agreement."
        }
      ]
    },
    {
      id: 8,
      heading: "Article 8 - Exercising the Consumer’s right of withdrawal and the costs",
      other: [
        {
          id: 1,
          para: "1. If the Consumer exercises his right of withdrawal he shall notify the Entrepreneur unambiguously with the standard form for withdrawal within the period of reflection."
        },
        {
          id: 2,
          para: "2. The Consumer shall return the product or deliver it to (the authorized representative of) the Entrepreneur as soon as possible but within 14 days counting from the day following the notification referred to in sub-clause 1. This need not be done if the entrepreneur offered to collect the product himself. The Consumer observed the period of returning the product in any event if the product is returned before the expiration of the period of reflection."
        },
        {
          id: 3,
          para: "3. The Consumer shall return the product with all delivered accessories and if reasonably possible in the original state and packing and in conformity with reasonable and clear instructions given by the Entrepreneur."
        },
        {
          id: 4,
          para: "4. The risk and the burden of proof for the correct and timely exercise of the right of withdrawal fall on the Consumer."
        },
        {
          id: 5,
          para: "5. The Consumer shall bear the direct costs of returning the product. If the Entrepreneur has not reported that the Consumer has to bear these costs or if the Entrepreneur pointed out that he will bear the costs himself, the Consumer need not pay the cost of returning the product."
        },
        {
          id: 6,
          para: "6. If the Consumer withdraws after having first explicitly requested that the performance of a service or the supply of gas, water or electricity having not been made ready for sale not be started in a limited volume or given quantity during the period of reflection, the Consumer shall pay the Entrepreneur an amount that is equal to the part of the obligation already performed at the time of withdrawal as compared with the full compliance of the obligation."
        },
        {
          id: 7,
          para: "7. The Consumer does not bear the costs for performing services for the supply of water, gas or electricity that had not been made ready for sale in a limited volume or quantity, or for the supply of district heating if"
        },
        {
          id: 8,
          para: "a. the Entrepreneur has not provided the Consumer with the statutorily required information about the right of withdrawal, the compensation of costs in case of withdrawal or the standard form for withdrawal, or"
        },
        {
          id: 9,
          para: "b. if the Consumer has not explicitly requested that the performance of the service or the supply of gas, water and electricity or district heating be started during the period of reflection."
        },
        {
          id: 10,
          para: "8. The Consumer does not bear any cost for the full or partial delivery of digital content not stored on a physical carrier if"
        },
        {
          id: 11,
          para: "a. prior to the delivery, he has not explicitly consented to start performance of the agreement before the end of the period of reflection;"
        },
        {
          id: 12,
          para: "b. he did not acknowledge to lose his right of withdrawal when giving consent; or"
        },
        {
          id: 13,
          para: "c. the Entrepreneur failed to confirm the Consumer’s statement."
        },
        {
          id: 14,
          para: "9. The Consumer does not bear any cost for the full or partial delivery of digital content not stored on a physical carrier if"
        },
      ]
    },
    {
      id: 9,
      heading: "Article 9 - Entrepreneur’s obligation in case of withdrawal",
      other: [
        {
          id: 1,
          para: "1. If the Entrepreneur makes the notification of withdrawal by electronic means possible, he shall promptly send a return receipt."
        },
        {
          id: 2,
          para: "2. The Entrepreneur shall reimburse all payments made by the Consumer, including any delivery costs that the Consumer may charge for the returned product, as soon as possible but within 14 days following the day on which the Consumer notified him of the withdrawal. Unless the Entrepreneur offers to collect the product himself, he can wait with paying back until having received the product or until the Consumer proved that he returned the product, whichever occurs first."
        },
        {
          id: 3,
          para: "3. The Entrepreneur shall make use of the same means of payment that the Consumer used, unless the Consumer consents to another method. The reimbursement is free of charge for the Consumer."
        },
        {
          id: 4,
          para: "4. If the Consumer opted for a more expensive method of delivery instead of the cheapest standard delivery, the Entrepreneur need not reimburse the additional costs for the more expensive method."
        }
      ]
    },
    {
      id: 10,
      heading: "Article 10 - Exclusion of the right of withdrawal",
      other: [
        {
          id: 1,
          para: "1. If the Consumer exercises his right of withdrawal he shall notify the Entrepreneur unambiguously with the standard form for withdrawal within the period of reflection."
        },
        {
          id: 2,
          para: "2. The Consumer shall return the product or deliver it to (the authorized representative of) the Entrepreneur as soon as possible but within 14 days counting from the day following the notification referred to in sub-clause 1. This need not be done if the entrepreneur offered to collect the product himself. The Consumer observed the period of returning the product in any event if the product is returned before the expiration of the period of reflection."
        },
        {
          id: 3,
          para: "3. The Consumer shall return the product with all delivered accessories and if reasonably possible in the original state and packing and in conformity with reasonable and clear instructions given by the Entrepreneur."
        },
        {
          id: 4,
          para: "4. The risk and the burden of proof for the correct and timely exercise of the right of withdrawal fall on the Consumer."
        },
        {
          id: 5,
          para: "5. The Consumer shall bear the direct costs of returning the product. If the Entrepreneur has not reported that the Consumer has to bear these costs or if the Entrepreneur pointed out that he will bear the costs himself, the Consumer need not pay the cost of returning the product."
        },
        {
          id: 6,
          para: "6. If the Consumer withdraws after having first explicitly requested that the performance of a service or the supply of gas, water or electricity having not been made ready for sale not be started in a limited volume or given quantity during the period of reflection, the Consumer shall pay the Entrepreneur an amount that is equal to the part of the obligation already performed at the time of withdrawal as compared with the full compliance of the obligation."
        },
        {
          id: 7,
          para: "7. The Consumer does not bear the costs for performing services for the supply of water, gas or electricity that had not been made ready for sale in a limited volume or quantity, or for the supply of district heating if"
        },
        {
          id: 8,
          para: "a. the Entrepreneur has not provided the Consumer with the statutorily required information about the right of withdrawal, the compensation of costs in case of withdrawal or the standard form for withdrawal, or"
        },
        {
          id: 9,
          para: "b. if the Consumer has not explicitly requested that the performance of the service or the supply of gas, water and electricity or district heating be started during the period of reflection."
        },
        {
          id: 10,
          para: "8. The Consumer does not bear any cost for the full or partial delivery of digital content not stored on a physical carrier if"
        },
        {
          id: 11,
          para: "a. prior to the delivery, he has not explicitly consented to start performance of the agreement before the end of the period of reflection;"
        },
        {
          id: 12,
          para: "b. he did not acknowledge to lose his right of withdrawal when giving consent; or"
        },
        {
          id: 13,
          para: "c. the Entrepreneur failed to confirm the Consumer’s statement."
        },
        {
          id: 14,
          para: "9. The Consumer does not bear any cost for the full or partial delivery of digital content not stored on a physical carrier if"
        },
      ]
    },
    {
      id: 11,
      heading: "Article 11 - The price",
      other: [
        {
          id: 1,
          para: "Termination:"
        },
        {
          id: 2,
          para: "1. The Consumer may at all times terminate a contract that was concluded for an indefinite time and which extends to the regular delivery of products (including electricity) or services, with due observance of the termination rules and subject to not more than one month’s notice."
        },
        {
          id: 3,
          para: "2. The Consumer may at all times terminate a contract that was concluded for a specific time and which extends to the regular delivery of products (including electricity) or services at the end of the specific period, with due observance of the termination rules and a subject to not more than one month’s notice."
        },
        {
          id: 4,
          para: "3. The Consumer can cancel the agreements mentioned in the preceding paragraphs:"
        },
        {
          id: 5,
          para: "a. at any time and not be limited to termination at a particular time or in a given period;"
        },
        {
          id: 6,
          para: "b. at least in the same way as they were concluded by him;"
        },
        {
          id: 7,
          para: "c. at all times with the same notice as the Entrepreneur stipulated for himself."
        }
      ]
    },
    {
      id: 12,
      heading: "Article 12 - Compliance and extra guaranty",
      other: [
        {
          id: 1,
          para: "1. The Entrepreneur guarantees that the products and/or services comply with the contract, with the specifications listed in the offer, with reasonable requirements of usability and/or reliability and with the existing statutory provisions and/or government regulations on the day the contract was concluded. If agreed, the Entrepreneur also guarantees that the product is suitable for other than normal use."
        },
        {
          id: 2,
          para: "2. An extra guarantee offered by the Entrepreneur, his Supplier, Manufacturer or Importer shall never affect the rights and claims the Consumer may exercise against the Entrepreneur about a failure in the fulfillment of the Entrepreneur’s obligations if the Entrepreneur has failed in the fulfillment of his part of the agreement."
        },
        {
          id: 3,
          para: "3. ‘Extra guarantee’ is taken to mean each obligation by the Entrepreneur, his Supplier, Importer or Manufacturer in whom he assigns certain rights or claims to the Consumer that go further than he is legally required in case he fails in the compliance with his part of the agreement."
        }
      ]
    },
    {
      id: 13,
      heading: "Article 13 - Delivery and execution",
      other: [
        {
          id: 1,
          para: "1. The Entrepreneur shall exercise the best possible care when booking orders and executing product orders and when assessing requests for the provision of services."
        },
        {
          id: 2,
          para: "2. The place of delivery is at the address given by the Consumer to the Entrepreneur."
        },
        {
          id: 3,
          para: "3. With due observance of the stipulations in Article 4 of these General Terms and Conditions, the Entrepreneur shall execute accepted orders with convenient speed but at least within 30 days, unless another delivery period was agreed on. If the delivery has been delayed, or if an order cannot be filled or can be filled only partially, the Consumer shall be informed about this within one month after ordering. In such cases, the Consumer is entitled to repudiate the contract free of charge and with the right to possible compensation."
        },
        {
          id: 4,
          para: "4. After repudiation in conformity with the preceding paragraph, the Entrepreneur shall return the payment made by the Consumer promptly but at least within 30 days after repudiation."
        },
        {
          id: 5,
          para: "5. The risk of loss and/or damage to products will be borne by the Entrepreneur until the time of delivery to the Consumer or a representative appointed in advance and made known to the Consumer, unless explicitly agreed otherwise."
        }
      ]
    },
    {
      id: 14,
      heading: "Article 14 - Continuing performance contract: duration, termination and extension",
      other: [
        {
          id: 1,
          para: "Termination:"
        },
        {
          id: 2,
          para: "1. The Consumer may at all times terminate a contract that was concluded for an indefinite time and which extends to the regular delivery of products (including electricity) or services, with due observance of the termination rules and subject to not more than one month’s notice."
        },
        {
          id: 3,
          para: "2. The Consumer may at all times terminate a contract that was concluded for a specific time and which extends to the regular delivery of products (including electricity) or services at the end of the specific period, with due observance of the termination rules and a subject to not more than one month’s notice."
        },
        {
          id: 4,
          para: "3. The Consumer can cancel the agreements mentioned in the preceding paragraphs:"
        },
        {
          id: 5,
          para: "a. at any time and not be limited to termination at a particular time or in a given period;"
        },
        {
          id: 6,
          para: "b. at least in the same way as they were concluded by him;"
        },
        {
          id: 7,
          para: "c. at all times with the same notice as the Entrepreneur stipulated for himself."
        }
      ]
    },
    {
      id: 15,
      heading: "Article 15 - Payment",
      other: [
        {
          id: 1,
          para: "1. Unless otherwise stipulated in the agreement or in the additional conditions, the amounts to be paid by the Consumer must be settled within 14 days after the period of reflection, or if there is no period of reflection within 14 days after concluding the agreement. In case of an agreement to provide a service, this period starts on the day that the Consumer received the confirmation of the agreement."
        },
        {
          id: 2,
          para: "2. When selling products to Consumers, it is not permitted to negotiate an advance payment of more than 50% in the General Terms and Conditions. If an advance payment was agreed, the Consumer may not assert any right regarding the execution of the order in question or the service(s) in question before making the agreed advance payment."
        },
        {
          id: 3,
          para: "3. The Consumer has the duty to inform the Entrepreneur promptly of possible inaccuracies in the payment details that were given or specified."
        },
        {
          id: 4,
          para: "4. In case the Consumer has not complied with his payment obligation(s) in time, and the Entrepreneur has pointed out to him that the payment was late and allowed the Consumer a period of 14 days to comply with the payment obligations, the Consumer is to pay the statutory interest on the amount payable and the Entrepreneur is entitled to charge the Consumer with any extrajudicial collection costs. These extrajudicial collection costs amount to no more than 15% for outstanding amounts up to € 2,500, 10% for the following € 2,500 and 5% for the following € 5000, with a minimum of € 40. The Entrepreneur may deviate from the aforementioned amounts and percentages in favor of the Consumer."
        }
      ]
    },
    {
      id: 16,
      heading: "Article 16 - Complaints procedure",
      other: [
        {
          id: 1,
          para: "1. The Entrepreneur shall have a sufficiently notified complaints procedure in place, and shall handle the complaint in accordance with this complaint procedure."
        },
        {
          id: 2,
          para: "2. Complaints about the performance of the contract shall be submitted fully and clearly described to the Entrepreneur within a reasonable time after the Consumer discovered the defects"
        },
        {
          id: 3,
          para: "3. The complaints submitted to the Entrepreneur shall be replied within a period of 14 days after the date of receipt. Should a complaint require a foreseeable longer time for handling, the Entrepreneur shall respond within 14 days with a notice of receipt and an indication when the Consumer can expect a more detailed reply."
        },
        {
          id: 4,
          para: "4. If the complaint cannot be solved in joint consultation within a reasonable time or within 3 months after submitting the complaint, there will be a dispute that is open to the dispute settlement rules."
        }
      ]
    },
    {
      id: 17,
      heading: "Article 17 - Disputes",
      other: [
        {
          id: 1,
          para: "1. Contracts between the Entrepreneur and the Consumer to which these General Terms and Conditions apply, are exclusively governed by Dutch law."
        },
        {
          id: 2,
          para: "2. With due observance of the provisions set out below, the disputes between the Consumer and the Entrepreneur about the formation or the performance of contracts related to products or services that the Entrepreneur must deliver or has already delivered can be submitted by both the Consumer and the Entrepreneur to Geschillencommissie Webshop, Postbus 90600, 2509 LP, The Hague (Den Haag) (www.sgc.nl)."
        },
        {
          id: 3,
          para: "3. A dispute is handled by the Disputes Committee [Geschillencommissie] only if the Consumer submitted his/her complaint to the Entrepreneur within a reasonable period."
        },
        {
          id: 4,
          para: "4. If the complaint cannot be solved in joint consultation within a reasonable time or within 3 months after submitting the complaint, there will be a dispute that is open to the dispute settlement rules."
        },
        {
          id: 5,
          para: "1. The Entrepreneur shall have a sufficiently notified complaints procedure in place, and shall handle the complaint in accordance with this complaint procedure."
        },
        {
          id: 6,
          para: "2. Complaints about the performance of the contract shall be submitted fully and clearly described to the Entrepreneur within a reasonable time after the Consumer discovered the defects"
        },
        {
          id: 7,
          para: "7. The Disputes Committee will not handle a dispute or will discontinue handling it if the Entrepreneur is granted a moratorium, goes bankrupt or actually ended his business activities before the Commission has handled a dispute at the hearing and delivered a final award."
        },
        {
          id: 8,
          para: "8. If in addition to the Geschillencommissie Webshop another disputes committee recognised by or affiliated with the Stichting Geschillencommissies voor Consumentenzaken (SGC) [Foundation for Consumer Complaints Committees] or the Klachteninstituut Financiële Dienstverlening (Kifid) [Financial Services Complaints Board] is competent, the disputes that are mainly related to sales methods or distance services, the Geschillencommissie Webshop Keurmerk is preferably competent, and for all other disputes, the disputes committee recognized by and affiliated with the SGC or Kifid is competent."
        }
      ]
    },
    {
      id: 18,
      heading: "Article 18 - Sector guarantee",
      other: [
        {
          id: 1,
          para: "Additional provisions of and/or derogations from these General Terms and Conditions should not be to the Consumer’s detriment and must be put in writing or recorded in such a way that theConsumer can store them in an accessible manner on a long-term data carrier."
        }
      ]
    },
  ]



  return (
    <>
      <div className="container-fluid Terms px-1 py-5 px-md-3 px-lg-5">
        <div className="container">
          <div className="row py-5">
            <div className="col">
              <h1 className='display-6 text-center fw-normal'>Terms of service</h1>
            </div>
          </div>
          <div className="row Terms-container pb-5">
            <div className="col">
              <p className='fs-6 fw-light'>Content</p>
              {termsContent.map((item, index, innerIndex) => {
                return (
                  <p className='fw-light py-0 terms-p' key={index}>{item.heading}</p>
                )
              })}
            </div>
          </div>
          <div className="row Terms-container">
            <div className="col">
              {termsContent.map((item, index) => {
                // ... display heading for parent object
                if (item.other) { // Check if there's an inner array
                  return (
                    <>
                      <div className='box py-2'>
                        <h6 className='py-2' key={index}>{item.heading}</h6>
                        {item.other.map((innerItem, innerIndex) => (
                          <p className='fw-light' style={{ fontSize: ".9rem" }}>{innerItem.para}</p>
                        ))}
                      </div>
                    </>
                  );
                } else {
                  // Handle cases where there's no inner array
                  return (
                    <h6 className='py-2 terms-p' key={index}>{item.heading}</h6>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Terms