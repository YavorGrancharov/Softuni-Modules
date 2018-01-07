<?php

/* project/delete.html.twig */
class __TwigTemplate_e96ae7270a11341b1876afd5543a20b46b73c0030e5df66a9382e05bce8babd9 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("base.html.twig", "project/delete.html.twig", 1);
        $this->blocks = array(
            'main' => array($this, 'block_main'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $__internal_ea252326a83db2928b4aaa24bb863d5269a7456cf7fb6576a1c8b28dd0b47e9e = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_ea252326a83db2928b4aaa24bb863d5269a7456cf7fb6576a1c8b28dd0b47e9e->enter($__internal_ea252326a83db2928b4aaa24bb863d5269a7456cf7fb6576a1c8b28dd0b47e9e_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "project/delete.html.twig"));

        $__internal_6bdc37a68ccc96e3c575de8338c64b878a67636cf180bb4a733e616a25498deb = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_6bdc37a68ccc96e3c575de8338c64b878a67636cf180bb4a733e616a25498deb->enter($__internal_6bdc37a68ccc96e3c575de8338c64b878a67636cf180bb4a733e616a25498deb_prof = new Twig_Profiler_Profile($this->getTemplateName(), "template", "project/delete.html.twig"));

        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_ea252326a83db2928b4aaa24bb863d5269a7456cf7fb6576a1c8b28dd0b47e9e->leave($__internal_ea252326a83db2928b4aaa24bb863d5269a7456cf7fb6576a1c8b28dd0b47e9e_prof);

        
        $__internal_6bdc37a68ccc96e3c575de8338c64b878a67636cf180bb4a733e616a25498deb->leave($__internal_6bdc37a68ccc96e3c575de8338c64b878a67636cf180bb4a733e616a25498deb_prof);

    }

    // line 3
    public function block_main($context, array $blocks = array())
    {
        $__internal_6f5bafde95cd400c77d0db773e759ca0dbe80313bb2f1b56a3942c97742ff3ff = $this->env->getExtension("Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension");
        $__internal_6f5bafde95cd400c77d0db773e759ca0dbe80313bb2f1b56a3942c97742ff3ff->enter($__internal_6f5bafde95cd400c77d0db773e759ca0dbe80313bb2f1b56a3942c97742ff3ff_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "main"));

        $__internal_4acc0e28996014e7b9f8f8732a67640dce1442a555cd1f08ca85bfc477e85830 = $this->env->getExtension("Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension");
        $__internal_4acc0e28996014e7b9f8f8732a67640dce1442a555cd1f08ca85bfc477e85830->enter($__internal_4acc0e28996014e7b9f8f8732a67640dce1442a555cd1f08ca85bfc477e85830_prof = new Twig_Profiler_Profile($this->getTemplateName(), "block", "main"));

        // line 4
        echo "<div class=\"wrapper\">
    <form class=\"project-create\" method=\"post\">
        <div class=\"create-header\">
            Delete Project
        </div>
        <div class=\"create-title\">
            <div class=\"create-title-label\">Title</div>
            <input class=\"create-title-content\" name=\"project[title]\" value=\"";
        // line 11
        echo twig_escape_filter($this->env, $this->getAttribute(($context["project"] ?? $this->getContext($context, "project")), "title", array()), "html", null, true);
        echo "\" disabled=\"disabled\"/>
        </div>
        <div class=\"create-description\">
            <div class=\"create-description-label\">Description</div>
            <textarea rows=\"3\" class=\"create-description-content\" name=\"project[description]\"
                      disabled=\"disabled\">";
        // line 16
        echo twig_escape_filter($this->env, $this->getAttribute(($context["project"] ?? $this->getContext($context, "project")), "description", array()), "html", null, true);
        echo "</textarea>
        </div>
        <div class=\"create-budget\">
            <div class=\"create-budget-label\">Budget</div>
            <input type=\"number\" min=\"0\" class=\"create-budget-content\" name=\"project[budget]\" value=\"";
        // line 20
        echo twig_escape_filter($this->env, $this->getAttribute(($context["project"] ?? $this->getContext($context, "project")), "budget", array()), "html", null, true);
        echo "\"
                   disabled=\"disabled\"/>
        </div>
        <div class=\"create-button-holder\">
            <button type=\"submit\" class=\"submit-button\">Delete Project</button>
            <a type=\"button\" href=\"/\" class=\"back-button\">Back</a>
        </div>

        ";
        // line 28
        echo $this->env->getRuntime('Symfony\Bridge\Twig\Form\TwigRenderer')->searchAndRenderBlock($this->getAttribute(($context["form"] ?? $this->getContext($context, "form")), "_token", array()), 'row');
        echo "
    </form>
</div>
";
        
        $__internal_4acc0e28996014e7b9f8f8732a67640dce1442a555cd1f08ca85bfc477e85830->leave($__internal_4acc0e28996014e7b9f8f8732a67640dce1442a555cd1f08ca85bfc477e85830_prof);

        
        $__internal_6f5bafde95cd400c77d0db773e759ca0dbe80313bb2f1b56a3942c97742ff3ff->leave($__internal_6f5bafde95cd400c77d0db773e759ca0dbe80313bb2f1b56a3942c97742ff3ff_prof);

    }

    public function getTemplateName()
    {
        return "project/delete.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  84 => 28,  73 => 20,  66 => 16,  58 => 11,  49 => 4,  40 => 3,  11 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("{% extends \"base.html.twig\" %}

{% block main %}
<div class=\"wrapper\">
    <form class=\"project-create\" method=\"post\">
        <div class=\"create-header\">
            Delete Project
        </div>
        <div class=\"create-title\">
            <div class=\"create-title-label\">Title</div>
            <input class=\"create-title-content\" name=\"project[title]\" value=\"{{ project.title }}\" disabled=\"disabled\"/>
        </div>
        <div class=\"create-description\">
            <div class=\"create-description-label\">Description</div>
            <textarea rows=\"3\" class=\"create-description-content\" name=\"project[description]\"
                      disabled=\"disabled\">{{ project.description }}</textarea>
        </div>
        <div class=\"create-budget\">
            <div class=\"create-budget-label\">Budget</div>
            <input type=\"number\" min=\"0\" class=\"create-budget-content\" name=\"project[budget]\" value=\"{{ project.budget }}\"
                   disabled=\"disabled\"/>
        </div>
        <div class=\"create-button-holder\">
            <button type=\"submit\" class=\"submit-button\">Delete Project</button>
            <a type=\"button\" href=\"/\" class=\"back-button\">Back</a>
        </div>

        {{ form_row(form._token) }}
    </form>
</div>
{% endblock %}", "project/delete.html.twig", "C:\\Users\\Lalka\\Desktop\\PHP-Skeleton\\app\\Resources\\views\\project\\delete.html.twig");
    }
}
