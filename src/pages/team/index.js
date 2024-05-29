import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { getProducts, productSlug } from "@/lib/product";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import TeamItem from "@/components/team";
import TeamData from "@/data/team";
function TeamPage() {
  const agents = getProducts(TeamData, "buying", "featured", 6);

  return (
    <>
      <LayoutOne topbar={true}>
        <ShopBreadCrumb title="Our Agent" sectionPace="" currentSlug="Agent" />

        <div className="ltn__team-area pb-90">
          <Container>
            <Row>
              {agents.map((data, key) => {
                const slug = productSlug(data.name);
                return (
                  <Col key={key} xs={12} sm={6} lg={4}>
                    <TeamItem
                      baseUrl="team"
                      data={data}
                      slug={slug}
                      additionalClassname=""
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>

        <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
          <Container>
            <Row>
              <Col xs={12}>
                <CallToAction />
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default TeamPage;
